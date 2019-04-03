import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Store from "./store";
import Routes from "./routes";
import { ThemeProvider } from "styled-components";
import theme from "./common/theme/theme";
import "./common/theme/fontFace.scss";
import AppProvicer from "./AppProvider";

ReactDOM.render(
  <Provider store={Store}>
    <ThemeProvider theme={theme}>
      <AppProvicer>
        <Routes />
      </AppProvicer>
    </ThemeProvider>
  </Provider>,
  document.getElementById("mainApp")
);
