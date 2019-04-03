import React from "react";

export const user = {
  name: "",
  request: false,
  success: false,
  failure: false
};

export const UserContext = React.createContext(user);
export default UserContext;
