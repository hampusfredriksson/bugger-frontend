import React from "react";
import { AuthUserContext, withAuthorization } from "../Session/";
import styled from "styled-components";
import Button from "../Styles/Button";
// const firebase = require('firebase/app');

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



const handleClick = () => {
  const data = {
    manufacturer: "Apple",
    model: "iPhone 11 XLS PRO",
    os: "iOS",
    osVersion: "13.3.7",
  };
  console.log("🚀: handleClick -> data", data);
  // http://localhost:5001/bugger-d1c9b/us-central1/addMessage
  fetch("http://localhost:5001/bugger-d1c9b/us-central1/addMessage", {
    method: "POST", // or 'PUT'
    headers: {
      "Access-Control-Allow-Origin": "http://localhost:3000",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

const Account = () => (
  <AuthUserContext.Consumer>
    {(authUser) => (
      <div>
        <ApiKey>
          <Code>{authUser.uid}</Code>
        </ApiKey>
        <h1>Account Page</h1>
        <h2>This account belongs to {authUser.email}</h2>

        <Button onClick={handleClick}>
          <p>This is a demo button</p>
        </Button>
      </div>
    )}
  </AuthUserContext.Consumer>
);

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(Account);
