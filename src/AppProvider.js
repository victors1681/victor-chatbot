import React, { useState } from "react";
import UserContext, { user as initialUser } from "./contexts/UserContext";
import ChatContext, { chat as initialChat } from "./contexts/ChatContext";

const AppProvicer = props => {
  const setUser = userName => {
    console.log("BEFORE set state", user);
    setUserState(prev => ({
      ...prev,
      name: userName
    }));
    console.log("AFTER set state", user);
  };

  const addChatMessage = (msg, user) => {
    const message = {
      text: msg,
      from: user
    };

    setChatState(prev => ({
      ...prev,
      items: [...chat.items, message]
    }));
  };

  initialUser.setUser = setUser;
  initialChat.addChatMessage = addChatMessage;

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
