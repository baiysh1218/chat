import { fetchMessages, sendMessage } from "../../app/redux/action/ChatAction";
import { useAppDispatch, useAppSelector } from "../../app/redux/hooks/hooks";
import { Button } from "../../shared/Button/Button";
import { Input } from "../../shared/Input/Input";
import { Wrapper } from "../../shared/Wrapper/Wrapper";
import React from "react";
import { useState } from "react";
import { ChatWrapper } from "../../shared/ChatWrapper/ChatWrapper";
import send from "../../assets/png/send.png";
import { TextArea } from "src/shared/TextArea/TextArea";
import { useEffect } from "react";
import { ChatMessage } from "src/app/redux/model/model";
import { auth } from "src/fire";
import { ChatUX } from "src/shared/ChatUX/ChatUX";

const Chat = () => {
  const [messageSend, setMessageSend] = useState<string>("");
  const dispatch = useAppDispatch();
  const { message } = useAppSelector(state => state.chat);

  const currentUser = auth.currentUser?.providerData[0];

  const handleSendMessage = () => {
    dispatch(sendMessage(messageSend));
    handleGetMessage();
  };

  const handleGetMessage = () => {
    dispatch(fetchMessages());
  };

  useEffect(() => {
    handleGetMessage();
  }, []);

  return (
    <ChatUX>
      <ChatWrapper>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {message?.map((ms: ChatMessage) => (
            <p
              style={
                currentUser?.email === ms.user
                  ? {
                      alignSelf: "flex-end",
                      backgroundColor: "#0077ee",
                      fontSize: "20px",
                      padding: "10px",
                      borderRadius: "5px",
                      color: "white",
                    }
                  : {
                      alignSelf: "flex-start",
                      backgroundColor: "#9491ee",
                      fontSize: "20px",
                      padding: "10px",
                      borderRadius: "5px",
                      color: "white",
                    }
              }
              key={ms.timestamp}>
              {ms.text}
            </p>
          ))}
        </div>
      </ChatWrapper>
      <div>
        <TextArea
          value={messageSend}
          onChange={e => setMessageSend(e.target.value)}
        />
        <Button onClick={handleSendMessage}>
          <img width="30px" src={send} alt="" />
        </Button>
      </div>
    </ChatUX>
  );
};

export default Chat;
