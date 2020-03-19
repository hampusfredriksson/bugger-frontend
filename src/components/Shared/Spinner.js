import React from "react";
import styled from "styled-components";

const Spinner = () => (
  <div>
    <Loading>
      <Circle />
      <Circle />
      <Circle />
    </Loading>
  </div>
);

const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
`;

const Circle = styled.div`
  background-color: black;
  border-radius: 50%;
  margin: 4px;
  height: 12px;
  width: 12px;
  animation: jump 0.6s ease-in-out infinite;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);

  &:nth-of-type(1) {
    background-color: grey;
  }

  &:nth-of-type(2) {
    background-color: papayawhip;
    animation-delay: 0.1s;
  }

  &:nth-of-type(3) {
    background-color: grey;
    animation-delay: 0.2s;
  }

  @keyframes jump {
    0% {
      transfrom: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
`;

export default Spinner;
