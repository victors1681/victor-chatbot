import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Store from "./store";
import Routes from "./routes";
import { ThemeProvider } from "styled-components";
import theme from "./common/theme/theme";
import "./common/theme/fontFace.scss";

ReactDOM.render(
  <Provider store={Store}>
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  </Provider>,
  document.getElementById("mainApp")
);
