import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import styled from "styled-components";
import { SignUpLink } from "../SignUp/SignUp";
import { withFirebase } from "../Firebase";

import * as ROUTES from "../../constants/routes";

const Form = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column;
  width: 300px;
  height: 350px;
  margin: 0 auto;
  border: 2px solid #000;
  border-radius: 20px;
  background: #eee;
  margin-top: 10rem;
  margin-bottom: 10rem;
`;

const Button = styled.button`
  background: green;
  color: #fff;
  padding: 10px;
  margin: 5px;
  width: 150px;
  border: none;
  border-radius: 10px;
  box-sizing: border-box;
  &:disabled {
  color: #d12028;
  background: #a9a9a9;
}
`;

const Input = styled.input`
  border: 1px solid #000;
  border-radius: 10px;
  padding: 10px;
  margin: 5px;
  width: 150px;
  box-sizing: border-box;
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
      <Form onClick={this.onSubmit}>
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
