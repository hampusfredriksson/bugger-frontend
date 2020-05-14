import React, { useState } from "react";
import { AuthUserContext, withAuthorization } from "../Session/";
import styled from "styled-components";
import Button from "../Styles/Button";
import Spinner from "../Styles/Spinner";

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

  const [isLoading, setIsLoading] = useState(false);

  async function handleClick() {
    setIsLoading(true);
    try {
      const data = {
        resolution: "1920x1080",
        dpi: "420",
        connectivity: "wifi",
        device_id: "ESv0TnsEbfCs",
        device_name: "Kalles iPhone",
        device_available_storage: "128 GB",
        device_flight_mode: false,
        device_bluetooth: true,
        device_orientation: "landscape",
        device_wifi_signal_strength: "98",
        device_available_ram: "1286 MB",
        device_processor: "A13 Bionic",
        device_build_number: "jkn7QFw6LK02",
        device_sim: "WDeAoBIB1mja",
        device_ip_address: "127.0.0.1",
        device_locale: "sv_SE",
        device_time: "",
        app_version: "1.0.3",
        app_build: "2.1.4",
        has_permission_to_gps: true,
        user_id: "Uqbz3",
        os: "iOS",
        os_version: "iOS 13.3.7",
        battery_level: "100%",
      };
      let url = "https://us-central1-bugger-d1c9b.cloudfunctions.net/addReport";
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
      window.location.href = `mailto:support@hampus.app?subject=Bugreport:%20${minifiedDate}&body=Here%20is%20your%20URL:%20${urlResponse.url}`;
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
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
            <div>
              {isLoading ? (
                <span>
                  <Spinner />
                </span>
              ) : (
                "Submit bug report"
              )}
            </div>
          </Button>
          <Code>
            <a href={debugUrl.url}>{debugUrl.url}</a>{" "}
          </Code>
        </div>
      )}
    </AuthUserContext.Consumer>
  );
};

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(Account);
