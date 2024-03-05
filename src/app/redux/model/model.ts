import { AsyncThunk } from "@reduxjs/toolkit";
import { Auth, GoogleAuthProvider } from "firebase/auth";

export type SignInArgs = {
  auth: Auth;
  email: string;
  password: string;
};

// Определяем тип для возвращаемого значения функции createAsyncThunk
export type RegisterThunk = AsyncThunk<void, SignInArgs, {}>;

export interface User {
  displayName: string | null;
  email: string;
  phoneNumber: number | null;
  photoURL: string | null;
  providerId: string;
  uid: string;
}
// export type User = {
//   providerData: {
//     displayName: string | null;
//     email: string | null;
//     phoneNumber: number | null;
//     photoUrl: string | null;
//     providerId: string;
//     uid: string;
//   };
// };

interface Error {
  code: string | undefined;
  name: string | undefined;
}

export interface IInitialState {
  user: User | null;
  loading: boolean;
  error: Error | false;
  authStatus: string;
}

export interface SignInWithGoogleArgs {
  auth: Auth;
  googleProvider: GoogleAuthProvider;
}
export interface ChatMessage {
  text: string;
  user: string; // Предполагается, что у пользователя есть свойство displayName
  timestamp: string;
}

export interface ChatState {
  message: ChatMessage[] | null;
}
