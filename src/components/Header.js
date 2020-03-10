import React from "react";
import styled from "styled-components";
// import { ReactComponent as Explore } from "../explore.svg";
import Logo from "../images/bugger.png";
// import { ReactComponent as Compass } from "../compass.svg";
import Button from "../components/shared/Button";
const Nav = styled.div`
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
`;
const NavHeader = styled.div`
  max-width: 1010px;
  padding: 26px 20px;
  width: 100%;
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
border-radius: 50%; 
background-color: coral;
width: 70px; 
padding: 5px; 
`

const MenuLink = styled.a``;
const Header = () => {
  return (
    <Nav>
      <NavHeader>
        <NavLeft>
          <LogoImage src={Logo} /> 
        </NavLeft>
        <NavCenter>
          <Button>Another test</Button>
          <Input type="text" placeholder="Search" />
        </NavCenter>
        <NavRight>
          <MenuLink href="/login">
            <ProfileImage src="https://api.adorable.io/avatars/285/abott@adorable.png" />
          </MenuLink>
        </NavRight>
      </NavHeader>
    </Nav>
  );
};
export default Header;
