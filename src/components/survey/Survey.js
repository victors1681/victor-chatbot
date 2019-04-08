import React, { useContext } from "react";
import {
  Card,
  CardFooter,
  SecundaryBtn,
  Error
} from "common/styles/common.styled.js";
import { Table, TextArea, DoneBtn, Header as MainHeader } from "./Survey.style";
import UserContext from "../../contexts/UserContext";
import ChatContext from "../../contexts/ChatContext";
import { endChat } from "../../api/api";
import { Form, Field, Formik } from "formik";
import { Link } from "react-router-dom";

const { Row, Header, Column, Footer } = Table;
const questions = [
  {
    q: "Amelia understand and maintains the conversation",
    fieldName: "q1"
  },
  {
    q: "The interaction with Amelia is unpredictable",
    fieldName: "q2"
  },
  { q: "I enjoyed talking to Amelia", fieldName: "q3" },
  {
    q: "Amelia has a good command of the language (i.e. correct grammar)",
    fieldName: "q4"
  }
];
const options = ["sa", "a", "n", "d", "done"];

const generateCheckGroup = (question, fieldName) => {
  return options.map(o => (
    <Column key={o}>
      <Field
        type="radio"
        value="Strongly Disagree"
        data-question={question}
        name={fieldName}
      />
    </Column>
  ));
};

const renderRadioSurvey = () =>
  questions.map(question => (
    <Row key={question.fieldName}>
      <Column> {question.q}</Column>
      {generateCheckGroup(question.q, question.fieldName)}
    </Row>
  ));

const onHandleSubmit = (userContext, chatContext, history) => (
  values,
  { setSubmitting, resetForm, setErrors }
) => {
  if (isFormValid(values)) {
    endChat(values, userContext.id).then(res => {
      if (res.status > 200 && res.status < 205) {
        const code = res.data.result;
        chatContext.setCode(code);
        history.push(`/${code}`);
      }
    });
    resetForm();
  } else {
    setErrors({ error: "Please complete the form" });
  }
};

const isFormValid = values => {
  const { q1, q2, q3, q4, q5 } = values;
  if (!q1 || !q2 || !q3 || !q4 || !q5) {
    return false;
  }
  return true;
};

const Survey = ({ history }) => {
  const userContext = useContext(UserContext);
  const chatContext = useContext(ChatContext);

  return (
    <Card>
      <MainHeader>Social Amelia Survey</MainHeader>
      <Formik
        onSubmit={onHandleSubmit(userContext, chatContext, history)}
        initialValues={{ q1: "", q2: "", q3: "", q4: "", q5: "" }}
      >
        {props => (
          <Form className="survey">
            <Table>
              <Header>
                <Column> </Column>
                <Column>Strongly Disagree</Column>
                <Column> Disagree</Column>
                <Column> Neutral</Column>
                <Column> Agree</Column>
                <Column> Strongly Agree</Column>
              </Header>

              {renderRadioSurvey()}
              <Footer>
                <Column>
                  How would you describe your overall interaction?
                </Column>
                <Column style={{ width: "70%" }}>
                  <TextArea component="textarea" name="q5" />
                </Column>
              </Footer>
            </Table>
            <Error>{props.errors.error && props.errors.error}</Error>
            <CardFooter>
              <SecundaryBtn as={Link} to="/chat">
                Back
              </SecundaryBtn>
              <DoneBtn type="submit">Done</DoneBtn>
            </CardFooter>
          </Form>
        )}
      </Formik>
    </Card>
  );
};

export default Survey;
