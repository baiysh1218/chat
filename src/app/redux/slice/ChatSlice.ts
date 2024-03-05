import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchMessages, sendMessage } from "../action/ChatAction";
import { ChatState } from "../model/model";

const initState: ChatState = {
  message: null,
};

export const ChatSlice = createSlice({
  name: "chat",
  initialState: initState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(sendMessage.fulfilled, (state: ChatState) => {});
    builder.addCase(
      fetchMessages.fulfilled,
      (state: ChatState, action: PayloadAction<any>) => {
        console.log(action.payload);

        state.message = action.payload;
      }
    );
  },
});

export default ChatSlice;
