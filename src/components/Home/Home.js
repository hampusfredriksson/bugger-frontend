import React from "react";
import Spinner from "../Shared/Spinner";
import withAuthorization from "../Session/withAuthorization";

const Home = () => (
  <div>
    <h1>This is Home page</h1>

    <p> Only accesible by signed in users, right??</p>
    <Spinner />
  </div>
);

const condition = (authUser) => authUser != null;

export default withAuthorization(condition)(Home);
