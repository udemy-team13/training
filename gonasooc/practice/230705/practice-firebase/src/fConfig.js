// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUUCyYiYtPgLscEvHnejncAyfZu8coV7c",
  authDomain: "udemy-9906f.firebaseapp.com",
  projectId: "udemy-9906f",
  storageBucket: "udemy-9906f.appspot.com",
  messagingSenderId: "835650911505",
  appId: "1:126666481253:web:8d4b4a73589b1803d9708c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
};
export default app;
