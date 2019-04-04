import React from "react";
import {
  ChatWrapper,
  LeftPanel,
  RightPanel,
  ChatBoxWrapper
} from "./Chat.styled";
import ChatBox from "components/chatbox";
import ChatLog from "components/chatLog";
import ChatInput from "components/chatInput";

const Chat = () => {
  return (
    <ChatWrapper>
      <LeftPanel>
        <ChatBoxWrapper>
          <ChatLog />
          <ChatInput />
        </ChatBoxWrapper>
      </LeftPanel>
      <RightPanel>right</RightPanel>
    </ChatWrapper>
  );
};

export default Chat;
