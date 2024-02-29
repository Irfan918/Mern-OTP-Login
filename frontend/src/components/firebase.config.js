// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDji2u0SvEp0shhxb9wlUSY84Dz9QUwApA",
  authDomain: "testauth-e67b4.firebaseapp.com",
  projectId: "testauth-e67b4",
  storageBucket: "testauth-e67b4.appspot.com",
  messagingSenderId: "871474033527",
  appId: "1:871474033527:web:f0bb2d0e48e822fb882772",
  measurementId: "G-Z5RLP795FM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
