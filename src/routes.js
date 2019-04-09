import React, { useContext } from "react";
import ChatView from "./views/chat";
import ChatEnd from "./views/chatEnd";
import Landing from "./components/Landing/Landing";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { MainWrapper } from "./common/styles/common.styled.js";
import WelcomeText from "./components/welcomeText";
import Survey from "./components/survey";
import UserContext from "./contexts/UserContext";
import ChatContext from "./contexts/ChatContext";

const Routes = () => {
  const userContext = useContext(UserContext);
  const chatContext = useContext(ChatContext);
  const isAllowed = !!userContext.id && userContext.captcha;
  const isCodeGenerated = !!chatContext.code;
  return (
    <BrowserRouter>
      <MainWrapper>
        <Switch>
          {[
            <Route key="landingView" path="/" component={Landing} exact />,
            isAllowed && !isCodeGenerated && (
              <Route key="chatView" path="/chat" component={ChatView} />
            ),
            isAllowed && !isCodeGenerated && (
              <Route
                key="welcomeView"
                path="/welcome"
                component={WelcomeText}
              />
            ),
            isAllowed && !isCodeGenerated && (
              <Route key="surveyView" path="/survey" component={Survey} />
            ),
            isAllowed && isCodeGenerated && (
              <Route key="end" path="/:code" component={ChatEnd} />
            ),
            <Route key="default" component={Landing} />
          ]}
        </Switch>
      </MainWrapper>
    </BrowserRouter>
  );
};

export default Routes;
