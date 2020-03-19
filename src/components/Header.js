import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../images/bugger.png";
import Button from "./Shared/Button";

const Nav = styled.div` 
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.50);
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
`;
const NavCenter = styled.div`
  width: 33.333%;
  text-align: center;
`;
const Input = styled.input`
  font-size: 16px;
  border: solid 1px #dbdbdb;
  border-radius: 3px;
  color: #262626;
  padding: 7px 33px;
  border-radius: 3px;
  color: #999;
  cursor: text;
  font-size: 14px;
  font-weight: 300;
  text-align: center;
  background: #fafafa;
  &:active,
  &:focus {
    text-align: left;
  }
`;
const NavRight = styled.div`
  width: 33.333%;
  text-align: right;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 70px;
  padding: 5px;
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
          </NavLeft>
          <NavCenter>
            <Button>Another test</Button>
            <Input type="text" placeholder="Search" />
          </NavCenter>
          <NavRight>
            <Link to="/login">
              <ProfileImage src="https://api.adorable.io/avatars/285/abott@adorable.png" />
            </Link>
          </NavRight>
        </NavHeader>
    </Nav>
  );
};
export default Header;
