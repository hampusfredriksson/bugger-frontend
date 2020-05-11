import React from "react";
import { Link } from "react-router-dom";
import { AuthUserContext } from "../Session";
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
  <div>
    <Button>
      <Link to={ROUTES.LANDING}>Landing</Link>
    </Button>
    <Button>
      <Link to={ROUTES.HOME}>Home</Link>
    </Button>
    <Button>
      <Link to={ROUTES.ACCOUNT}>Account</Link>
    </Button>
  </div>
);

const NavigationNonAuth = () => (
  <div>
    <Button>
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
    </Button>
    <Button>

      <Link to={ROUTES.LANDING}>Landing</Link>
    </Button>
  </div>
);

export default Navigation;
