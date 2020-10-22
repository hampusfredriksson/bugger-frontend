import React from "react";
import styled from "styled-components";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "../Header";
import LandingPage from "../Landing";
import SignInPage from "../SignIn/SignIn";
import SignUpPage from "../SignUp/SignUp";
import PasswordForgetPage from "../PasswordForget/PasswordForget";
import HomePage from "../Home/Home";
import AccountPage from "../Account/Account";
import AdminPage from "../Admin/Admin";
import NotFoundPage from '../NotFound'
import Footer from "../Footer";

import * as ROUTES from "../../constants/routes";
import { withAuthentication } from "../Session";
import { GlobalStyle } from ".././Styles/GlobalStyle";

const AppWrapper = styled.div`
  width: 100%;
  margin: auto;
`;

const HeroSvg = styled.svg`
  width: 100%;
  height: auto;
  position: absolute;
  pointer-events: none;
`;

const App = () => (
  <>
    <GlobalStyle />
    <AppWrapper>
      <BrowserRouter>
        <HeroSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#DA2725"
            fillOpacity="0.1"
            d="M0,224L48,186.7C96,149,192,75,288,85.3C384,96,480,192,576,197.3C672,203,768,117,864,122.7C960,128,1056,224,1152,261.3C1248,299,1344,277,1392,266.7L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </HeroSvg>
        <Header />
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
          <Route component={NotFoundPage} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </AppWrapper>
  </>
);

export default withAuthentication(App);
