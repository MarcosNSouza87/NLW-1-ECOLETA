import React from "react";
import ReactDOM from "react-dom";
import "./styles/global.tsx";
import { ThemeProvider } from "styled-components";
import GlobalStyle from './styles/global';
import light from "./styles/theme/light";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={light}>
      <GlobalStyle/>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
