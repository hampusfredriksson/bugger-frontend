import React, { useState } from "react";
import { AuthUserContext, withAuthorization } from "../Session/";
import styled from "styled-components";
import Button from "../Styles/Button";
import Spinner from "../Styles/Spinner";

const ApiKey = styled.div`
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

const Container = styled.div`
  max-width: 960px;
  padding: 8%;
  height: auto;
  margin: auto;
  font-family: "FiraCode-Retina";
`;

const Header = styled.div`
  width: fit-content;
  background: #e8e8e8;
`;

const FlexGrid = styled.div`
  color: black;
  display: flex;
  margin: auto -1rem 1rem;
`;

const Section = styled.section`
  background-color: #e8e8e8;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  padding: 1rem;
  flex: 4;
`;

// TODO Cleanup needed.

const Account = () => {
  const [{ ...debugUrl }, setdebugUrl] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

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
      window.location.href = `mailto:${email}?subject=Bugreport:%20${minifiedDate}&body=Here%20is%20your%20URL:%20${urlResponse.url}`;
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.error(err);
    }
  }
  const date = new Date(Date.now());
  const minifiedDate = date.toLocaleString("sv-SE");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    setEmail("");
  };

  const handleChange = (e) => {
    const value = e.target.value;
    console.log(value);
    if (!/[a-zA-Z0-9._\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,4}/.test(value))
      setError("Email is invalid");
    else setError(null);
    setEmail(value);
  };

  return (
    <AuthUserContext.Consumer>
      {(authUser) => (
        <Container>
          <Header>
            <h1>Account</h1>
          </Header>
          <FlexGrid>
            <Section>
              <ApiKey>
                <Code>{authUser.uid}</Code>
              </ApiKey>
              <h2>Account belongs to {authUser.email}</h2>
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
            </Section>
          </FlexGrid>
          <h3>Here, I don't know yet.</h3>
          <p>{email}</p>
          <form onSubmit={handleSubmit}>
            <input
              id="message"
              name="message"
              type="text"
              onChange={handleChange}
              value={email}
            />
            <button disabled={error} type="button">
              generate url
            </button>
            {error && (
              <label style={{ color: "red" }} htmlFor="email">
                {error}
              </label>
            )}
          </form>
        </Container>
      )}
    </AuthUserContext.Consumer>
  );
};

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(Account);
