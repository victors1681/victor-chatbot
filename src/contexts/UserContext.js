import React from "react";

export const user = {
  id: null,
  name: "",
  captcha: null,
  request: false,
  success: false,
  failure: false
};

export const UserContext = React.createContext(user);
export default UserContext;
