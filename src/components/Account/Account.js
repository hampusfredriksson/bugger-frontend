import React, { useState } from "react";
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

const Account = () => {
  const [{ ...debugUrl }, setdebugUrl] = useState("");

  async function handleClick() {
    try {
      const data = {
        resolution: "1440x2300",
        dpi: "420",
        connectivity: "eth0",
        device_id: "123asd",
        app_version: "1.0.2",
        app_build: "2.3.1",
        device_locale: "eng",
        device_time: Date.now(),
        has_permission_to_gps: "yes",
        user_id: "asd123",
        date: Date.now(),
      };
      // http://localhost:5001/bugger-d1c9b/us-central1/addMessage
      let url =
        "https://us-central1-bugger-d1c9b.cloudfunctions.net/addMessage";
      let response = await fetch(url, {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const urlResponse = await response.json();
      setdebugUrl(urlResponse);
      console.log("🚀: handleClick -> urlResponse", urlResponse);
      console.log(debugUrl.bugreport);
    } catch (err) {
      console.error(err);
    }
  }
  let date = new Date(Date.now());
  let minifiedDate = date.toLocaleString("sv-SE");

  return (
    <AuthUserContext.Consumer>
      {(authUser) => (
        <div>
          <ApiKey>
            <Code>{authUser.uid}</Code>
          </ApiKey>
          <p>this api key has been used: 13 times.</p>
          <h1>Account Page</h1>
          <h2>This account belongs to {authUser.email}</h2>

          <Button onClick={handleClick}>
            <p>This is a demo button</p>
          </Button>
          {/* TODO: Make this dynamic for  */}
          <a
            href={`mailto:support@hampe.app?subject=Bugreport: ${minifiedDate}&body=Here is your URL: ${debugUrl.bugreport}`}>
            email
          </a>

          <div>Här vill jag rendera urlResponse: {debugUrl.bugreport}</div>
        </div>
      )}
    </AuthUserContext.Consumer>
  );
};

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(Account);
