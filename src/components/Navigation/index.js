import React from "react";
import { Link } from "react-router-dom";
import { AuthUserContext } from "../Session";
import SIGN_OUT from "../SignOut";
import Button from "../Styles/Button";

import * as ROUTES from "../../constants/routes";

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {(authUser) => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = () => (
  <>
    <Button>
      <Link to={ROUTES.HOME}>Home</Link>
    </Button>
    <Button>
      <Link to={ROUTES.ACCOUNT}>Account</Link>
    </Button>
    <SIGN_OUT />
  </>
);

const NavigationNonAuth = () => (
  <>
    <Button>
      <Link to={ROUTES.LANDING}>Landing</Link>
    </Button>
    <Button>
      <Link to={ROUTES.SIGN_IN}>get started</Link>
    </Button>
  </>
);

export default Navigation;
