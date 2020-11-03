import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import hero from "../images/hero.svg";

import {
  RiComputerLine,
  RiStackLine,
  RiCheckboxCircleLine,
} from "react-icons/ri";

const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;

const Row = styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;

const Col = styled.div`
  -ms-flex: 0 0 25%;
  flex: 0 0 25%;
  max-width: 25%;
  padding-top: 100px;
`;

const H6 = styled.h3`
  font-weight: 400;
`;

const Button = styled.button`
  display: inline-block;
  font-weight: 400;
  color: #fff;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  @media (prefers-reduced-motion: reduce) {
    .btn {
      transition: none;
    }
  }
  &:hover {
    color: #d3d3d3;
    text-decoration: none;
  }
  &:focus {
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
`;

const Showcase = styled.div`
  -ms-flex: 0 0 75%;
  flex: 0 0 75%;
  max-width: 75%;
  min-height: 30rem;
  background-size: cover;
`;

const Image = styled.img`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 650px;
`;

const Features = styled.section`
  padding-top: 7rem;
  padding-bottom: 7rem;
  background-color: #f8f9fa;
  text-align: center;
  margin-top: 50px;
  padding-top: 70px;
  padding-bottom: 70px;
  height: 7rem;
  margin-bottom: 10rem;
`;

const ColLg = styled.div`
  -ms-flex: 0 0 33.333333%;
  flex: 0 0 33.333333%;
  max-width: 33.333333%;
  background-color: #efeff0;
`;

const FeaturesItem = styled.div`
  max-width: 20rem;
  padding-top: 7rem;
  padding-bottom: 7rem;
  margin-right: auto;
  margin-bottom: 3rem;
  height: 7rem;
`;

const Lead = styled.p`
  font-size: 1.25rem;
  font-weight: 300;
  margin-bottom: 0;
`;

const Landing = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1>Easy</h1>
            <h1>bugreport</h1>
            <br />
            <H6>
              For any type of project.
              <br />
              You can focus on your app. Follow the quick guide on{" "}
              <a
                href="https://github.com/hampusfredriksson/bugger-frontend"
                target="_blank"
                rel="noopener noreferrer">
                {" "}
                <u>github</u>
              </a>{" "}
              how to send data to bugger which will display information about
              your user and their device. Easy Peasy.
            </H6>
            <br />
            <Button>
              <Link to={ROUTES.SIGN_IN}>Get started</Link>
            </Button>
          </Col>
          <Showcase>
            <Image src={hero} />
          </Showcase>
        </Row>
      </Container>

      <Features>
        <Container>
          <Row>
            <ColLg>
              <FeaturesItem>
                <RiComputerLine size={50} />
                <h5>Easy managment</h5>
                <Lead>
                  It's as easy as changing socks! (Well almost), add the wanted
                  email in <Link to={ROUTES.ACCOUNT}>account</Link>
                  and map the standard keys. Wildcards should be sent to the
                  json three.
                </Lead>
              </FeaturesItem>
            </ColLg>
            <ColLg>
              <FeaturesItem>
                <RiStackLine size={50} />
                <h5>Security</h5>
                <Lead>
                  Reports can be deleted instantly or removed automagically
                  after 7 days.
                </Lead>
              </FeaturesItem>
            </ColLg>
            <ColLg>
              <FeaturesItem>
                <RiCheckboxCircleLine size={50} />
                <h5>Always free</h5>
                <Lead>Use free forever and ever.</Lead>
              </FeaturesItem>
            </ColLg>
          </Row>
        </Container>
      </Features>
    </>
  );
};

export default Landing;
