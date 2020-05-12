import React from "react";

const BugDetail = ({ title, value }) => {
  return (
    <>
      <h4>{title}</h4>
      <p>{value}</p>
    </>
  );
};

export default BugDetail;
