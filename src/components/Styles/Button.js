import styled from "styled-components";

const Button = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  color: ${(props) => (props.primary ? "vilolet" : "palevioletred")};
  border: 2px solid palevioletred;
  margin: 0 1em;
  height: 4em;
  width: 10em;
  padding: 0.25 1em;
  transition: 0.3s all ease-out;
  outline: none;

  &:hover {
    background-color: ${(props) =>
      props.primary ? "violet" : "palevioletred"};
    color: white;
  }
`;

export default Button;
