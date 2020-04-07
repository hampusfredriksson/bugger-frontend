import React from "react";
import Spinner from "../Styles/Spinner";
import withAuthorization from "../Session/withAuthorization";

const Admin = () => (
  <div>
    <h1>This is Admin page</h1>

    <p> Only accesible by signed in users, right??</p>
    <Spinner />
  </div>
);

const condition = (authUser) => authUser != null;

export default withAuthorization(condition)(Admin);
