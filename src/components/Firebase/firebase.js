import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyC1_WgmzqpH52WJMwKLA9XCqgDxDHagY7k",
  authDomain: "bugger-d1c9b.firebaseapp.com",
  databaseURL: "https://bugger-d1c9b.firebaseio.com",
  projectId: "bugger-d1c9b",
  storageBucket: "bugger-d1c9b.appspot.com",
  messagingSenderId: "646721874617",
  appId: "1:646721874617:web:2282f32c86d08631f00968",
  measurementId: "G-2T15742S3N",

  // This fucker wont work...
  // apiKey: process.env.REACT_APP_API_KEY,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // databaseURL: process.env.REACT_APP_DATABASE_URL,
  // projectId: process.env.REACT_APP_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_ID,
  // measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    // Helpers
    this.fieldValue = app.firestore.FieldValue;

    this.auth = app.auth();
    this.db = app.firestore();
  }

  // Auth API
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = (email) => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = (password) =>
    this.auth.currentUser.updatePassword(password);

  // Merge auth and db user
  onAuthUserListener = (next, fallback) =>
    this.auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        this.user(authUser.uid)
          .get()
          .then((snapshot) => {
            const dbUser = snapshot.data();

            if (!dbUser.roles) {
              dbUser.roles = {};
            }
            authUser = {
              uid: authUser.uid,
              email: authUser.email,
              providerData: authUser.providerData,
              ...dbUser,
            };
            next(authUser);
          });
      } else {
        fallback();
      }
    });

  // User API
  user = (uid) => this.db.doc(`users/${uid}`);
  users = () => this.db.collection("users");

  // message api

  message = (uid) => this.db.doc(`messages/${uid}`);
  messages = () => this.db.collection("messages");
}

export default Firebase;
