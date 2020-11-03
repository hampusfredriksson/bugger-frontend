import React from "react";
import { AuthUserContext, withAuthorization } from "../Session/";
import styled from "styled-components";
import Button from "../Styles/Button";

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

// const deleteUser = (req, res) => {
// };

// TODO Cleanup needed.

const Account = () => {
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
            </Section>
          </FlexGrid>

          <Button>Want to delete your account?</Button>
        </Container>
      )}
    </AuthUserContext.Consumer>
  );
};

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(Account);
