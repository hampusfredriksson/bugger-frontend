import React from "react";
import { AuthUserContext, withAuthorization } from "../Session/";
import styled from "styled-components";

const ApiKey = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
  margin-bottom: 16px;
  font-size: larger;
  font-weight: 600;
  line-height: 1.25;
`;

const Code = styled.code`
  padding: 0.2em 0.4em;
  margin: 0;
  margin-right: 10%;
  font-size: 85%;
  background-color: #b3b3b3;
  border-radius: 5px;
`;

const Account = () => (
  <AuthUserContext.Consumer>
    {(authUser) => (
      <div>
        <ApiKey>
          <Code>{authUser.uid}</Code>
        </ApiKey>
        <h1>Account Page</h1>
        <h2>This account belongs to {authUser.email}</h2>
      </div>
    )}
  </AuthUserContext.Consumer>
);

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(Account);
