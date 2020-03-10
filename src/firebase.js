import * as firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC1_WgmzqpH52WJMwKLA9XCqgDxDHagY7k",
  authDomain: "bugger-d1c9b.firebaseapp.com",
  databaseURL: "https://bugger-d1c9b.firebaseio.com",
  projectId: "bugger-d1c9b",
  storageBucket: "bugger-d1c9b.appspot.com",
  messagingSenderId: "646721874617",
  appId: "1:646721874617:web:2282f32c86d08631f00968",
  measurementId: "G-2T15742S3N"
};

firebase.initializeApp(firebaseConfig);

export default firebase
