import React, { useState } from "react";
import UserContext, { user as initialUser } from "./contexts/UserContext";
import ChatContext, { chat as initialChat } from "./contexts/ChatContext";
import uuid from "uuid/v1";

const AppProvicer = props => {
  const setUser = userName => {
    setUserState(prev => ({
      ...prev,
      name: userName
    }));
  };

  const addMsgFromCurrentUser = msg => {
    const payload = {
      result: msg,
      turns: null
    };
    addChatMessage(payload, user.name);
  };

  const addChatMessage = (data, user) => {
    const { result, turns } = data;

    const message = {
      id: uuid(),
      text: result,
      from: user ? user : "bot"
    };

    setChatState(prev => ({
      ...prev,
      request: false,
      items: [...prev.items, message],
      turns: turns ? turns : prev.turns
    }));
  };

  const setRequesting = status => {
    setChatState(prev => ({
      ...prev,
      request: !!status
    }));
  };

  initialUser.setUser = setUser;
  initialChat.addChatMessage = addChatMessage;
  initialChat.setRequesting = setRequesting;
  initialChat.addMsgFromCurrentUser = addMsgFromCurrentUser;

  const [user, setUserState] = useState(initialUser);
  const [chat, setChatState] = useState(initialChat);

  return (
    <UserContext.Provider displayName="UserContext Provider" value={user}>
      <ChatContext.Provider displayName="Chat Provider" value={chat}>
        {props.children}
      </ChatContext.Provider>
    </UserContext.Provider>
  );
};

export default AppProvicer;
