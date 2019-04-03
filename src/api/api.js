import axios from "../rest-client";

export const sendText = async (text, user) => {
  const result = await axios.post("/chat", { text, user });
  console.error(result);
  return result;

  // fetch("/api/chat", {
  //     headers,
  //     method: "post",
  //     body: JSON.stringify({ text, user })
  //   })
  //     .then(response => response.json())
  //     .then(json => {
  //       console.log(JSON.stringify(json));
  //       console.log("PUSH", history);
  //       history.push("/chat");
  //     });
};
