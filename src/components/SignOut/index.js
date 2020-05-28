import React from "react";
import Button from "../Styles/Button";

import { withFirebase } from "../Firebase";

const SignOutButton = ({ firebase }) => (
  <Button onClick={firebase.doSignOut}>Sign out</Button>
);

export default withFirebase(SignOutButton);
