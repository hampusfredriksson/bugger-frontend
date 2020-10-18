import React from "react";
import { Link } from "react-router-dom";
import PageNotFound from "../../images/PageNotFound.svg";
import styled from "styled-components";

const Container = styled.div`
  max-width: 960px;
  padding: 8%;
  margin: auto;
  font-family: "FiraCode-Retina";
`;

const NotFoundPage = () => {
  return (
    <Container>
      <img src={PageNotFound} alt="404" />
      <p style={{ textAlign: "center" }}>
        <Link to="/">Go to Home </Link>
      </p>
    </Container>
  );
};
export default NotFoundPage;
