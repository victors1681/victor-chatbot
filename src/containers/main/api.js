import axios from "../../rest-client";

export const getPost = () => {
  return axios.get("todos/1");
};
