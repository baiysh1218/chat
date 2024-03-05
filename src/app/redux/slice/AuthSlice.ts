import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserCredential } from "firebase/auth";
import {
  login,
  logout,
  register,
  signInWithGoogle,
} from "../action/AuthActions";
import { IInitialState, User } from "../model/model";

const initialState: IInitialState = {
  user: null,
  loading: false,
  error: false,
  authStatus: "pending",
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(register.pending, (state: IInitialState) => {
      state.loading = true;
    });

    builder.addCase(
      register.fulfilled,
      (state: IInitialState, action: PayloadAction<any>) => {
        localStorage.setItem("user", JSON.stringify(action.payload.user[0]));
        const userFromLocalStorage: User | null = JSON.parse(
          localStorage.getItem("user") as string
        );

        state.authStatus = "authenticated";
        state.user = userFromLocalStorage;
        state.loading = false;
      }
    );
    builder.addCase(register.rejected, (state: IInitialState, error) => {
      state.error = { code: error.error.code, name: error.error.code };
    });
    builder.addCase(login.pending, (state: IInitialState) => {
      state.loading = true;
    });
    builder.addCase(
      login.fulfilled,
      (state: IInitialState, action: PayloadAction<any>) => {
        localStorage.setItem("user", JSON.stringify(action.payload.user[0]));
        const userFromLocalStorage: User | null = JSON.parse(
          localStorage.getItem("user") as string
        );
        state.authStatus = "authenticated";
        state.user = userFromLocalStorage;
        state.loading = false;
      }
    );
    builder.addCase(login.rejected, (state: IInitialState, error) => {
      state.error = { code: error.error.code, name: error.error.name };
    });
    builder.addCase(logout.pending, (state: IInitialState) => {
      state.loading = true;
    });
    builder.addCase(logout.fulfilled, (state: IInitialState) => {
      state.user = null;
      state.authStatus = "notAuthenticated";
      state.loading = false;
    });
    builder.addCase(logout.rejected, (state: IInitialState, error) => {
      state.error = { code: error.error.code, name: error.error.name };
      state.loading = false;
    });
    builder.addCase(signInWithGoogle.pending, (state: IInitialState) => {
      state.loading = true;
    });
    builder.addCase(
      signInWithGoogle.fulfilled,
      (state: IInitialState, action: PayloadAction<any>) => {
        localStorage.setItem("user", JSON.stringify(action.payload[0]));
        const userFromLocalStorage: User | null = JSON.parse(
          localStorage.getItem("user") as string
        );
        state.authStatus = "authenticated";
        state.user = userFromLocalStorage;
        state.loading = false;
      }
    );
    builder.addCase(
      signInWithGoogle.rejected,
      (state: IInitialState, error) => {
        state.error = { code: error.error.code, name: error.error.name };
        state.loading = false;
      }
    );
  },
});

export default AuthSlice;
