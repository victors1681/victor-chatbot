import React, { useContext } from "react";
import ChatContext from "../../contexts/ChatContext";
import { ChatLogWrapper } from "./ChatLog.styled";
import LoadingDots from "components/loadingDots";

import "./style.scss";

const getUserMessage = log => {
  const className = log.from === "Amelia" ? "bubble me" : "bubble you";
  return (
    <div key={log.id} className={className}>
      <div className="text"> {log.text} </div>
      <div className="avatar" />
    </div>
  );
};

const ChatLog = () => {
  const chatContext = useContext(ChatContext);
  return (
    <ChatLogWrapper>
      <div className="chat active-chat" data-chat="person4">
        <div className="conversation-start">
          <span>Yesterday, 4:20 PM</span>
        </div>
        {chatContext.items.map(log => getUserMessage(log))}
        {chatContext.request && <LoadingDots />}
      </div>
    </ChatLogWrapper>
  );
};

export default ChatLog;
