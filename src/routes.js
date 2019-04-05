import React from "react";
import Navigation from "components/navigation";
import NotFound from "components/notFound";
import Main from "./containers/main";
import ChatView from "./views/chat";
import Landing from "./components/Landing/Landing";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { MainWrapper } from "./common/styles/common.styled.js";
import WelcomeText from "./components/welcomeText";
import Survey from "./components/survey";

const Routes = () => (
  <BrowserRouter>
    <MainWrapper>
      <Switch>
        <Route path="/" component={Landing} exact />
        <Route path="/chat" component={ChatView} />
        <Route path="/welcome" component={WelcomeText} />
        <Route path="/survey" component={Survey} />
        <Route component={NotFound} />
      </Switch>
    </MainWrapper>
  </BrowserRouter>
);

export default Routes;
