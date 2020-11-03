import styled from "styled-components";

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
  text-transform: uppercase;
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
    outline: none;

    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
`;

export default Button;
