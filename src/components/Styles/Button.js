import styled from "styled-components";

const Button = styled.button`
  cursor: pointer;
  display: inline-block;
  font-weight: 600;
  font-size: 14px;
  height: 50px;
  color: black;
  border-style: none;
  text-transform: uppercase;
  margin-right: 20px;
  overflow-x: hidden;
  position: relative;
  transition: 0.25s ease all;
  background: transparent;
  text-decoration: none;
  line-height: 45px;
  &::after {
    content: " ";
    position: absolute;
    display: block;
    bottom: 0;
    left: -100%;
    height: 5px;
    width: 100%;
    background: #8d8d8d;
    transition: 0.4s ease all;
  }
  &:hover::after {
    left: 0;
  }
  &:focus {
    outline: none;
  }
`;

export default Button;
