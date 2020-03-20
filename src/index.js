import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { GlobalStyle } from "../src/components/Shared/Theme/GlobalStyle";
import * as serviceWorker from "./serviceWorker";

import "typeface-roboto";
import "typeface-fira-code";

import Firebase, { FirebaseContext } from "./components/Firebase";

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <GlobalStyle />
    <App />
  </FirebaseContext.Provider>,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
