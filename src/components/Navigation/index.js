import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AuthUserContext } from "../Session";

import * as ROUTES from "../../constants/routes";
import SignOutButton from "../SignOut";

const UnorderedList = styled.ul`
  list-style: none;
`;

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {(authUser) => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = () => (
  <UnorderedList>
    <li>
      <Link to={ROUTES.LANDING}>Landing</Link>
    </li>
    <li>
      <Link to={ROUTES.HOME}>Home</Link>
    </li>
    <li>
      <Link to={ROUTES.ACCOUNT}>Account</Link>
    </li>
    <li>
      <SignOutButton />
    </li>
  </UnorderedList>
);

const NavigationNonAuth = () => (
  <UnorderedList>
    <li>
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
    </li>
    <li>
      <Link to={ROUTES.LANDING}>Landing</Link>
    </li>
  </UnorderedList>
);

export default Navigation;
