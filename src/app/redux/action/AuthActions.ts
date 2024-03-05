import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  Auth,
  AuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  UserCredential,
  GoogleAuthProvider,
} from "firebase/auth";
import { SignInArgs, SignInWithGoogleArgs, User } from "../model/model";

export const register = createAsyncThunk(
  "auth/register",
  async ({ auth, email, password }: SignInArgs) => {
    try {
      const userCredential: UserCredential =
        await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user.providerData;
      return { user };
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async ({ auth, email, password }: SignInArgs) => {
    try {
      const userCredential: UserCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user.providerData;
      return { user };
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (auth: Auth) => {
  try {
    await signOut(auth);
    localStorage.removeItem("user");
    return true;
  } catch (error) {
    console.error(error);
    throw error;
  }
});

export const signInWithGoogle = createAsyncThunk(
  "auth/google",
  async ({ auth, googleProvider }: SignInWithGoogleArgs) => {
    try {
      const userCredential: UserCredential = await signInWithPopup(
        auth,
        googleProvider
      );
      console.log(userCredential.user.providerData);

      return userCredential.user.providerData;
    } catch (error) {
      throw error;
    }
  }
);
