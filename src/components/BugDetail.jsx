import React from "react";
import styled from "styled-components";

const Bugs = styled.div`

`;

const Title = styled.h3`
margin: 0;
`;

const Value = styled.p`

`;

const BugDetail = ({ title, value }) => {
  return (
    <>
      <Bugs>
          <Title>{title}</Title>
        <Value>{value}</Value>
      </Bugs>
    </>
  );
};

export default BugDetail;
