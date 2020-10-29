import React from "react";

import styled from "styled-components";

import { FiHeart } from "react-icons/fi";

const Container = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;


`;

const MainFooter = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
  padding-top: 10rem;
  padding-bottom: 4rem;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  
`;

const ParagraphSmall = styled.p`
  font-family: "FiraCode-Retina";
`;

const Footer = () => {
  return (
    <Container>
      <MainFooter>
        <div>
          <hr />
          <Row>
            <ParagraphSmall>
              &copy; {new Date().getFullYear()} Buggy | Maintained by{" "}
              <a
                href="https://github.com/hampusfredriksson"
                target="_blank"
                rel="noopener noreferrer">
                hampus{" "}
              </a>
              | Built with <FiHeart /> from sweden.
            </ParagraphSmall>
          </Row>
        </div>
      </MainFooter>
    </Container>
  );
};

export default Footer;
