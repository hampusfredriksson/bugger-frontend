import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../images/ladybug.png";
import Button from '../components/Styles/Button'
import Navigation from "../components/Navigation";

const Nav = styled.div`
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.5);
`;
const NavHeader = styled.div`
  padding: 3px;
  width: 98%;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;
const NavLeft = styled.div`
  width: 33.333%;
  text-align: left;
  display: flex;
`;

const Logoname = styled.div`
  align-self: center;
`;
const NavCenter = styled.div`
  width: 33.333%;
  text-align: center;
`;

const NavRight = styled.div`
  width: 33.333%;
  text-align: right;
  justify-content: flex-end;
  display: flex;
`;


const LogoImage = styled.img`
  width: 100px;
  padding: 0px;
`;

const Header = () => {
  return (
    <Nav>
      <NavHeader>
        <NavLeft>
          <Link to="/">
            <LogoImage src={Logo} />
          </Link>
          <Logoname><h2>Buggy</h2></Logoname>
        </NavLeft>
        <NavCenter>
        </NavCenter>
        <NavRight>
        <Navigation />
          <Link to="/signup">
            <Button>GET STARTED</Button>
          </Link>
        </NavRight>
      </NavHeader>
    </Nav>
  );
};
export default Header;
