import React from "react";

export const chat = {
  request: false,
  success: false,
  failute: false,
  items: [],
  turns: 0,
  code: null
};

export const ChatContext = React.createContext(chat);
export default ChatContext;
