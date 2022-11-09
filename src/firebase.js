import firebase from "firebase";
// https://firebase.google.com/docs/web/setup#available-libraries

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtdFaM9ng8BHvuAHzv_zFnLpvLbkW3oBk",
  authDomain: "lohman-portfolio.firebaseapp.com",
  databaseURL: "https://lohman-portfolio-default-rtdb.firebaseio.com",
  projectId: "lohman-portfolio",
  storageBucket: "lohman-portfolio.appspot.com",
  messagingSenderId: "563028870419",
  appId: "1:563028870419:web:cba4d57aa65ff096b186e6",
  measurementId: "G-0D6XRSXG6J"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;
