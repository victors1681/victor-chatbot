import React, { useContext, useEffect, useRef } from "react";
import { Card, Content, Header } from "./Landing.style";
import UserContext from "../../contexts/UserContext";
import ChatContext from "../../contexts/ChatContext";

import {
  CardInput,
  CardButton,
  CardLink
} from "common/styles/common.styled.js";
import { withFormik, Form, Formik } from "formik";
import { sendText } from "../../api/api";

const onHandleSubmit = (userContext, chatContext, history) => (
  { name },
  { setSubmitting }
) => {
  console.log(userContext);
  sendText("hi", "amelia").then(res => {
    if (res.status > 200 && res.status < 205) {
      const { setUser } = userContext;
      setUser(name);
      chatContext.addChatMessage(res.data.result, "Amelia");
      console.log("User Context", userContext);
      history.push("/welcome");
      setSubmitting(false);
    }
  });
};

const onValidate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = "Required";
  }
  return errors;
};

const Landing = ({ history }) => {
  const chatContext = useContext(ChatContext);
  const userInput = useRef();

  useEffect(() => {
    userInput.current.focus();
  }, []);

  return (
    <UserContext.Consumer displayName="AppContext Consumer">
      {userContext => (
        <Card>
          <Header>Welcome to Amelia Social</Header>
          <Content>
            <Formik
              onSubmit={onHandleSubmit(userContext, chatContext, history)}
              validate={onValidate}
              initialValues={{ name: "" }}
            >
              {props => (
                <Form onSubmit={props.handleSubmit}>
                  <CardInput
                    name="name"
                    placeholder="Name"
                    autoComplete="off"
                    innerRef={userInput}
                  />
                  <CardButton disabled={props.isSubmitting} type="submit">
                    Start Chat
                  </CardButton>
                </Form>
              )}
            </Formik>
          </Content>
          <CardLink href="https://www.ipsoft.com" target="_blank">
            Learn more about IPSoft
          </CardLink>
        </Card>
      )}
    </UserContext.Consumer>
  );
};

export default Landing;
