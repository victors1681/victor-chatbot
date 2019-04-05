import React, { useContext, useEffect, useRef } from "react";
import { InputWrapper, InputText, SendBtn, SendIcon } from "./ChatInpt.styled";
import { Formik, Form } from "formik";
import UserContext from "../../contexts/UserContext";
import ChatContext from "../../contexts/ChatContext";
import { sendText } from "../../api/api";

const sleep = ms => x =>
  new Promise(resolve => setTimeout(() => resolve(x), ms));

const onHandleSubmit = (userContext, chatContext, inputRef) => (
  { inputChat },
  { setSubmitting, resetForm }
) => {
  chatContext.addChatMessage(inputChat, userContext.name);
  chatContext.setRequesting(true);
  resetForm();
  sendText(inputChat, userContext.name)
    .then(sleep(Math.floor(Math.random() * 2000)))
    .then(res => {
      if (res.status > 200 && res.status < 205) {
        const { setUser } = userContext;
        setUser(name);
        chatContext.setRequesting(true);
        chatContext.addChatMessage(res.data.result, "Amelia");
        inputRef.current.focus();
      }
    });
};

const onValidate = values => {
  const errors = {};
  if (!values.inputChat) {
    errors.inputChat = "Required";
  }
  return errors;
};

const ChatInput = () => {
  const userContext = useContext(UserContext);
  const chatContext = useContext(ChatContext);
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <InputWrapper>
      <Formik
        onSubmit={onHandleSubmit(userContext, chatContext, inputRef)}
        validate={onValidate}
        initialValues={{ inputChat: "" }}
      >
        {props => (
          <Form onSubmit={props.handleSubmit}>
            <InputText
              name="inputChat"
              autoComplete="off"
              innerRef={inputRef}
              disabled={props.isSubmitting}
            />
            <SendBtn type="submit" disabled={props.isSubmitting}>
              <SendIcon />
            </SendBtn>
          </Form>
        )}
      </Formik>
    </InputWrapper>
  );
};

export default ChatInput;
