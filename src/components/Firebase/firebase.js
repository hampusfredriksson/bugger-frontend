import app from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC1_WgmzqpH52WJMwKLA9XCqgDxDHagY7k",
  authDomain: "bugger-d1c9b.firebaseapp.com",
  databaseURL: "https://bugger-d1c9b.firebaseio.com",
  projectId: "bugger-d1c9b",
  storageBucket: "bugger-d1c9b.appspot.com",
  messagingSenderId: "646721874617",
  appId: "1:646721874617:web:2282f32c86d08631f00968",
  measurementId: "G-2T15742S3N"
};

// test

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
  }

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = (email) => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = (password) =>
    this.auth.currentUser.updatePassword(password);
}

export default Firebase;
