import React from "react";
import { Link } from "react-router-dom";
import Button from "./Styles/Button";
import styled from "styled-components";
import heroLightbulb from "../images/hero.svg";
// import blobShape from "../images/blob-shape.svg";

const Hero = styled.div`
  margin-top: 4em;
  display: flex;
  justify-content: center;
  word-wrap: break-word;
  padding: 4em;
`;

const Herotext = styled.div`
  text-align: left;
  margin-right: 2em;
  width: 30%;
`;

const HeroSubheader = styled.h3`
  margin-top: 20px;
  word-wrap: break-word;
`;

const GetStarted = styled.div`
  margin-top: 70px;
`;

const HeroImage = styled.img`
  height: 30%;
  width: 40%;
  border-radius: 10%;
`;

// const Blob = styled.img`
//   width: 20%;
//   height: 20%;
//   position: absolute;
// `;

const Landing = () => {
  return (
    <>
      <Hero>
        <Herotext>
          <h1>
            Use buggy to display <i>nice</i> bug reports. made with{" "}
            <u>simplicit</u>y in mind.
          </h1>

          <HeroSubheader>
            Allow users share bugs within your app, works everywhere {" & "}
            independant of any tech-stack.
          </HeroSubheader>

          <GetStarted>
            <Link to="/signin">
              <Button>Get started</Button>
            </Link>
            <Link to="/home">
              <Button>Sneak peek</Button>
            </Link>
          </GetStarted>
          {/* <Blob src={blobShape} alt="" /> */}
        </Herotext>
        <HeroImage src={heroLightbulb} />
      </Hero>
    </>
  );
};

export default Landing;
