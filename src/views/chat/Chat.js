import React, { useEffect, useState } from "react";
import {
  ChatWrapper,
  LeftPanel,
  RightPanel,
  ChatBoxWrapper
} from "./Chat.styled";
import ChatLog from "components/chatLog";
import ChatInput from "components/chatInput";
import Sidebar from "components/sidebar";

const desktopLayout = () => (
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

const mobileView = () => (
  <ChatWrapper>
    <Sidebar />
    <ChatBoxWrapper>
      <ChatLog />
      <ChatInput />
    </ChatBoxWrapper>
  </ChatWrapper>
);

const viewSelector = dimensions => {
  return dimensions.width > 1100 ? desktopLayout() : mobileView();
};

const Chat = () => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.height
  });
  const onResize = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.height
    });
    console.log(window.innerHeight, window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);
  }, []);

  return <React.Fragment>{viewSelector(dimensions)}</React.Fragment>;
};

export default Chat;
