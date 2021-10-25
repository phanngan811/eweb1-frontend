import * as firebase from "firebase";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHLGAo66iviwd0btMCQUwluhI-1TxrhQo",
  authDomain: "eweb-9fbd0.firebaseapp.com",
  projectId: "eweb-9fbd0",
  storageBucket: "eweb-9fbd0.appspot.com",
  messagingSenderId: "892970039825",
  appId: "1:892970039825:web:cb41f644b6923f6fc04fb0",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
