import React, { useContext, useEffect, useRef } from "react";
import ChatContext from "../../contexts/ChatContext";
import { ChatLogWrapper } from "./ChatLog.styled";
import LoadingDots from "components/loadingDots";
import moment from "moment";

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
  const chatRef = useRef();

  useEffect(() => {
    const chatContainer = chatRef.current;
    chatContainer.scrollTo(0, chatContainer.scrollHeight);
  });

  return (
    <div className="chat active-chat" ref={chatRef}>
      <div className="fix" />
      <div className="conversation-start">
        <span>{moment().format("MMMM   Do   YYYY")}</span>
      </div>
      {chatContext.items.map(log => getUserMessage(log))}
      {chatContext.request && <LoadingDots />}
    </div>
  );
};

export default ChatLog;
