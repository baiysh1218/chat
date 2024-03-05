import { configureStore, ThunkDispatch } from "@reduxjs/toolkit";
import AuthSlice from "../slice/AuthSlice";
import ChatSlice from "../slice/ChatSlice";

const store = configureStore({
  reducer: {
    auth: AuthSlice.reducer,
    chat: ChatSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<RootState, undefined, any>;

export default store;
