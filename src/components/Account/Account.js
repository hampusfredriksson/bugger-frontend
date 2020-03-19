import React from "react";
import { AuthUserContext, withAuthorization } from "../Session/";

const Account = () => (
  <AuthUserContext.Consumer>
    {(authUser) => (
      <div>
        <h1>Account Page</h1>
        <h2>This account belongs to {authUser.email}</h2>
      </div>
    )}
  </AuthUserContext.Consumer>
);

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(Account);
