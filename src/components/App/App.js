import React, { Fragment } from "react";
import styled from "styled-components";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import GlobalStyle from "../Shared/Theme/GlobalStyle";

import Navigation from "../Navigation";
import Header from "../Header";
import LandingPage from "../Landing";
import SignInPage from "../SignIn/SignIn";
import SignUpPage from "../SignUp/SignUp";
import PasswordForgetPage from "../PasswordForget/PasswordForget";
import HomePage from "../Home/Home";
import AccountPage from "../Account/Account";
import AdminPage from "../Admin/Admin";

import * as ROUTES from "../../constants/routes";

import firebase from "../../firebase";
// firebase
//   .firestore()
//   .collection("testing")
//   .add({
//     title: "Hampes cube",
//     time: "13s"
//   });

const AppWrapper = styled.div`
  width: 100%;
  margin: auto;
`;
const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <AppWrapper>
        <BrowserRouter>
          <Header />
          <Navigation />
          <Switch>
            <Route exact path={ROUTES.LANDING} component={LandingPage} />
            <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
            <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
            <Route
              exact
              path={ROUTES.PASSWORD_FORGET}
              component={PasswordForgetPage}
            />
            <Route exact path={ROUTES.HOME} component={HomePage} />
            <Route exact path={ROUTES.ACCOUNT} component={AccountPage} />
            <Route exact path={ROUTES.ADMIN} component={AdminPage} />
          </Switch>
        </BrowserRouter>
      </AppWrapper>
    </Fragment>
  );
};

export default App;
