import React from "react";
import { AuthUserContext, withAuthorization } from "../Session/";
import styled from "styled-components";

const ApiKey = styled.div`
background-color: lightgray;
border: 5px;

`;

const Account = () => (
  <AuthUserContext.Consumer>
    {(authUser) => (
      <div>
        <h1>Account Page</h1>
        <h2>This account belongs to {authUser.email}</h2>
        <ApiKey>
          <h3>{authUser.uid}</h3>
        </ApiKey>
      </div>
    )}
  </AuthUserContext.Consumer>
);

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(Account);
