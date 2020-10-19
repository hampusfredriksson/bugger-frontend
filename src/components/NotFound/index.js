import React from "react";
import { Link } from "react-router-dom";
import PageNotFound from "../../images/PageNotFound.svg";
import styled from "styled-components";

const Container = styled.div`
  max-width: 960px;
  padding: 8%;
  margin: auto;
  font-family: "FiraCode-Retina";
  margin-top: 1rem;
`;

const Message = styled.div`
  margin-bottom: 10rem;
`;

const NotFoundPage = () => {
  return (
    <Container>
      <Message style={{ textAlign: "center" }}>
        <h1>Oops!</h1>
        <p>We can't seem to find the page you're looking for.</p>

        <Link to="/">
          <u>Home</u>
        </Link>
      </Message>
      <img src={PageNotFound} alt="404" />
    </Container>
  );
};
export default NotFoundPage;
