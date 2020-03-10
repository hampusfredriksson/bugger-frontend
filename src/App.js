import React, { Fragment } from "react";
import styled from "styled-components";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import GlobalStyle from "../src/components/shared/theme/globalStyle";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Login from './components/Login'
// import firebase from "./firebase";

// firebase
//   .firestore()
//   .collection("times")
//   .add({
//     title: "Rubiks cube",
//     time: "45s"
//   });

const AppWrapper = styled.div`
  background-color: #fafafa;
`;
const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <AppWrapper>
        <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </BrowserRouter>
      </AppWrapper>
    </Fragment>
  );
};

export default App;
