import React from "react";
import Navigation from "components/navigation";
import NotFound from "components/notFound";
import Main from "./containers/main";
import Chat from "./components/chat";
import Landing from "./components/Landing/Landing";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { MainWrapper } from "./common/styles/common.styled.js";
import WelcomeText from "./components/welcomeText";

const Routes = () => (
  <BrowserRouter>
    <MainWrapper>
      <Switch>
        <Route path="/" component={Landing} exact />
        <Route path="/chat" component={Chat} />
        <Route path="/welcome" component={WelcomeText} />
        <Route component={NotFound} />
      </Switch>
    </MainWrapper>
  </BrowserRouter>
);

export default Routes;
