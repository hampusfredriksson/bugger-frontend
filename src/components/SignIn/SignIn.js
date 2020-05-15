import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import styled from "styled-components";
import { SignUpLink } from "../SignUp/SignUp";
import { withFirebase } from "../Firebase";
import axios from "axios";

import * as ROUTES from "../../constants/routes";

const Form = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 25rem;
  padding: 2.5rem;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.3);
  color: white;
  border-radius: 0.625rem;
`;

const Button = styled.button`
  outline: 0;
  text-transform: uppercase;
  background-color: #434c5e;
  width: 100%;
  border: 0;
  padding: 15px;
  color: #ffffff;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
  &:hover {
    background-color: #6d7c9c;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 0.625rem 0;
  font-size: 1.1rem;
  color: #fff;
  letter-spacing: 0.062rem;
  margin-bottom: 1.875rem;
  border: none;
  border-bottom: 0.065rem solid #fff;
  outline: none;
  background: transparent;
`;

const SignInPage = () => (
  <div>
    <SignInForm />
  </div>
);

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null,
};

class SignInFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (e) => {
    const { email, password } = this.state;
    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then((authUser) => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.ACCOUNT);
        let idToken = authUser.user.xa;
        console.log("🚀:  -> onSubmit -> idToken", idToken);
        console.log("🚀:  -> onSubmit -> authUser", authUser);
        axios.get("http://localhost:5001/bugger-d1c9b/us-central1/app/hello", {
          headers: {
            Authorization: "Bearer " + idToken,
          },
        });
      })
      .then((req, res) => {
        console.log(req, res);
      })
      .catch((error) => {
        this.setState({ error });
      });

    e.preventDefault();
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === "" || email === "";

    return (
      <Form onSubmit={this.onSubmit}>
        <h2>Sign In</h2>
        <Input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="email"
        />
        <Input
          name="password"
          value={password}
          onChange={this.onChange}
          type="password"
          placeholder="password"
        />
        <Button disabled={isInvalid} type="submit">
          Sign In
        </Button>
        <SignUpLink />

        {error && <p>{error.message}</p>}
      </Form>
    );
  }
}

const SignInForm = compose(withRouter, withFirebase)(SignInFormBase);

export default SignInPage;

export { SignInForm };
