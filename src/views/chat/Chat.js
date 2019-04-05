import React from "react";
import {
  ChatWrapper,
  LeftPanel,
  RightPanel,
  ChatBoxWrapper
} from "./Chat.styled";
import ChatLog from "components/chatLog";
import ChatInput from "components/chatInput";
import Sidebar from "components/sidebar";

const Chat = () => {
  return (
    <ChatWrapper>
      <LeftPanel>
        <ChatBoxWrapper>
          <ChatLog />
          <ChatInput />
        </ChatBoxWrapper>
      </LeftPanel>
      <RightPanel>
        <Sidebar />
      </RightPanel>
    </ChatWrapper>
  );
};

export default Chat;
