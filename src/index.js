import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Main from "./containers/main";
import Store from "./store";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from "components/navigation";
import NotFound from "components/notFound";

ReactDOM.render(
  <Provider store={Store}>
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path="/" component={Main} exact />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("mainApp")
);
