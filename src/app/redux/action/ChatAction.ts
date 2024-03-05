import { User } from "firebase/auth";
import { db } from "src/fire";
import { ref, push, set, onValue, DataSnapshot } from "firebase/database";
import { ChatMessage } from "../model/model";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "firebase/app";

export const sendMessage = createAsyncThunk(
  "chat/send",
  async (message: string): Promise<void> => {
    const user = JSON.parse(localStorage.getItem("user") as string);
    if (!user) {
      throw new Error("Пользователь не аутентифицирован");
    }

    const chatRef = ref(db, "chat");
    const newMessageRef = push(chatRef);
    const newMessage: ChatMessage = {
      text: message,
      user: user.email || "Anonymous",
      timestamp: new Date().toISOString(),
    };
    await set(newMessageRef, newMessage);
  }
);

export const fetchMessages = createAsyncThunk(
  "chat/fetchMessages",
  async () => {
    const chatRef = ref(db, "chat");

    return new Promise<ChatMessage[]>((resolve, reject) => {
      const messages: ChatMessage[] = [];

      const onDataChange = (snapshot: DataSnapshot) => {
        snapshot.forEach((childSnapshot: DataSnapshot) => {
          const message: ChatMessage = childSnapshot.val();
          messages.push(message);
        });
        resolve(messages); // Решаем Promise после получения данных
      };

      // Получение данных из базы данных
      onValue(chatRef, onDataChange, {
        onlyOnce: true, // Позволяет срабатывать только один раз
      });
    });
  }
);
