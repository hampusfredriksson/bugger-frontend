import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { compose } from "recompose";
import * as ROUTES from "../../constants/routes";
import { withFirebase } from "../Firebase";
import styled from "styled-components";
import axios from "axios";

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
        let idToken = authUser.user.xa;
        console.log("🚀: SignUpFormBase -> onSubmit -> idToken", idToken);
        console.log("🚀: SignUpFormBase -> onSubmit -> authUser", authUser);
        return this.props.firebase
          .user(authUser.user.uid)
          .set(
            {
              email: email,
              timestamp: Date.now(),
              uid: authUser.user.uid
            },
            { merge: true }
          )
          .then(() => {
            let data = JSON.stringify({
              password: this.state.passwordOne,
              username: this.state.email,
            });
            axios.get(
              "http://localhost:5001/bugger-d1c9b/us-central1/app/hello",
              data,
              {
                headers: {
                  Authorization: "Bearer " + idToken,
                },
              }
            );
          });
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
        </Form>
        {error && <p>{error.message}</p>}
      </>
    );
  }
}
const SignUpLink = () => (
  <p>
    Don't have an account?{" "}
    <Link style={{ color: "#FFF" }} to={ROUTES.SIGN_UP}>
      Sign Up
    </Link>
  </p>
);

const SignUpForm = compose(withRouter, withFirebase)(SignUpFormBase);

export default SignUpPage;
export { SignUpForm, SignUpLink };
