import React from "react";

export const chat = {
  request: false,
  success: false,
  failute: false,
  items: []
};

export const ChatContext = React.createContext(chat);
export default ChatContext;
