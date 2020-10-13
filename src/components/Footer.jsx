import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";

const MainFooter = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Col = styled.div`
  flex-direction: column;
`;

const ListUnstyled = styled.ul`
  list-style: none;
  padding: 0;
`;

const ParagraphSmall = styled.p`
  font-family: "FiraCode-Retina";
`;

const Footer = () => {
  return (
    <>
      <MainFooter>
        <div>
          <Row>
            <Col>
              <h4>Buggy</h4>
              <ListUnstyled>
                <li>Test</li>
              </ListUnstyled>
            </Col>
            <Col>
              <h4>Resources</h4>
              <ListUnstyled>
                <li>
                  <Link to="/about-buggy">How does it work</Link>
                </li>
                <li>
                  <a href="mailto:support@hampus.app?subject=Buggy issues">
                    support@hampus.app
                  </a>
                </li>
              </ListUnstyled>
            </Col>
            {/* column3 */}
            <Col>
              <h4>Links</h4>
              <ListUnstyled>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/hampusfredriksson/bugger-frontend">
                    <FaGithub />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/hampus-fredriksson-14b07391/">
                    <FaLinkedin />
                  </a>
                </li>
              </ListUnstyled>
            </Col>
          </Row>
          <hr />
          <Row>
            <ParagraphSmall>
              &copy; {new Date().getFullYear()} Buggy | Maintained by hampus
              | Built with <FiHeart /> from sweden.
            </ParagraphSmall>
          </Row>
        </div>
      </MainFooter>
    </>
  );
};

export default Footer;
