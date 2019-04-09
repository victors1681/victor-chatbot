import React, { useContext, useEffect, useRef } from "react";
import { Card, Content, Header } from "./Landing.style";
import UserContext from "../../contexts/UserContext";
import ChatContext from "../../contexts/ChatContext";
import { Error } from "common/styles/common.styled";
import ReCAPTCHA from "react-google-recaptcha";

import {
  CardInput,
  CardButton,
  CardLink
} from "common/styles/common.styled.js";
import { Form, Formik } from "formik";
import { sendText } from "../../api/api";

const onHandleSubmit = (userContext, chatContext, history) => (
  { name },
  { setSubmitting, setErrors }
) => {
  sendText("hi", name)
    .then(res => {
      if (res.status > 200 && res.status < 205) {
        userContext.setUser(name);
        chatContext.addChatMessage(res.data);
        history.push("/welcome");
        setSubmitting(false);
      }
    })
    .catch(e => {
      setErrors({ server: e.response.statusText });
      setSubmitting(false);
    });
};

const onValidate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = "Name is required";
  }
  return errors;
};

const Landing = ({ history }) => {
  const chatContext = useContext(ChatContext);
  const userContext = useContext(UserContext);
  const userInput = useRef();
  useEffect(() => {
    userInput.current.focus();
  }, []);

  const onValidateCaptcha = code => {
    userContext.setCaptcha(code);
  };

  return (
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
              {props.errors &&
                Object.keys(props.errors).map(e => (
                  <Error key={e}> {props.errors[e]}</Error>
                ))}
              <CardInput
                name="name"
                placeholder="Name"
                autoComplete="off"
                innerRef={userInput}
              />
              <ReCAPTCHA
                style={{ marginTop: "20px" }}
                sitekey="6LcEMp0UAAAAABaIVHy9_V4U-2CSPGAjElnxGmh2"
                onChange={onValidateCaptcha}
              />
              <CardButton
                disabled={props.isSubmitting || !userContext.captcha}
                type="submit"
              >
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
  );
};

export default Landing;
