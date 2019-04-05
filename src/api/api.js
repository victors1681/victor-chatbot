import axios from "../rest-client";

export const sendText = async (text, user) => {
  const result = await axios.post("/chat", { text, user });
  return result;
};
