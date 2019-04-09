import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes";
import { ThemeProvider } from "styled-components";
import theme from "./common/theme/theme";
import "./common/theme/fontFace.scss";
import AppProvicer from "./AppProvider";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <AppProvicer>
      <Routes />
    </AppProvicer>
  </ThemeProvider>,
  document.getElementById("mainApp")
);
