import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { compose } from "recompose";
import * as ROUTES from "../../constants/routes";
import { withFirebase } from "../Firebase";
import styled from "styled-components";

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

const SignUpPage = () => (
  <div>
    <SignUpForm />
  </div>
);

const INITIAL_STATE = {
  email: "",
  passwordOne: "",
  passwordTwo: "",
  error: null,
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }
  onSubmit = (event) => {
    const { email, passwordOne } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then((authUser) => {
        this.setState({ ...INITIAL_STATE });
        return this.props.firebase.user(authUser.user.uid).set(
          {
            email: email,
            timestamp: Date.now(),
            uid: authUser.user.uid,
          },
          { merge: true }
        );
      })
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.ACCOUNT);
      })
      .catch((error) => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, passwordOne, passwordTwo, error } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo || passwordOne === "" || email === "";

    return (
      <>
        <Form onSubmit={this.onSubmit}>
          <h2>Sign up</h2>

          <Input
            name="email"
            value={email}
            onChange={this.onChange}
            type="text"
            placeholder="email"
          />
          <Input
            name="passwordOne"
            value={passwordOne}
            onChange={this.onChange}
            type="password"
            placeholder="password"
          />
          <Input
            name="passwordTwo"
            value={passwordTwo}
            onChange={this.onChange}
            type="password"
            placeholder="confirm password"
          />
          <Button disabled={isInvalid} type="submit">
            Sign Up
          </Button>
          {error && <p>{error.message}</p>}
        </Form>
      </>
    );
  }
}
const SignUpLink = () => (
  <p>
    Don't have an account?{" "}
    <Link style={{ color: "#80ded0" }} to={ROUTES.SIGN_UP}>
      Sign Up
    </Link>
  </p>
);

const SignUpForm = compose(withRouter, withFirebase)(SignUpFormBase);

export default SignUpPage;
export { SignUpForm, SignUpLink };
