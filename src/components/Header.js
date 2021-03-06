import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../images/ladybug.png";
import Navigation from "../components/Navigation";

const Nav = styled.div`
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.5);
`;

const AppName = styled.div`
  display: flex;
`;

const NavHeader = styled.div`
  padding: 3px;
  width: 98%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
`;

const LogoImage = styled.img`
  width: 50px;
  padding: 0px;
`;

const Header = () => {
  return (
    <Nav>
      <NavHeader>
        <AppName>
          <h3>Buggy</h3>
          <Link to="/">
            <LogoImage src={Logo} />
          </Link>
        </AppName>

        <Navigation />
      </NavHeader>
    </Nav>
  );
};
export default Header;
