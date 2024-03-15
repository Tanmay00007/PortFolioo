import React from "react";
import { render } from 'react-dom'
import ReactDOM from "react-dom/client";
import { BaseProvider, LightTheme } from "baseui";
import { Provider as StyletronProvider } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";

import "./index.css";
import "./assets/font-awesome/css/all.css";

import App from "./App";

const engine = new Styletron();
const root = document.getElementById("root");
render( <React.Fragment>
  <StyletronProvider value={engine}>
    <BaseProvider theme={LightTheme}>
      <App />
    </BaseProvider>
  </StyletronProvider>
</React.Fragment>, root);

