import React from "react";
import styled from "styled-components";
import { BrowserRouter, Route, Switch } from "react-router-dom";

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
import { withAuthentication } from "../Session";
import { GlobalStyle } from ".././Styles/GlobalStyle";

const AppWrapper = styled.div`
  width: 100%;
  margin: auto;
`;

const App = () => (
  <>
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
          <Route exact path={`${ROUTES.HOME}/:id`} component={HomePage} />
          <Route exact path={ROUTES.ACCOUNT} component={AccountPage} />
          <Route exact path={ROUTES.ADMIN} component={AdminPage} />
        </Switch>
      </BrowserRouter>
    </AppWrapper>
  </>
);

export default withAuthentication(App);
