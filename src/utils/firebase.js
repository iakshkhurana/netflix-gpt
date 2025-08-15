// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFjx-djJanb3hduExoq0lFFBYJ2l1B-Ic",
  authDomain: "netflixgpt-7511b.firebaseapp.com",
  projectId: "netflixgpt-7511b",
  storageBucket: "netflixgpt-7511b.firebasestorage.app",
  messagingSenderId: "406153568685",
  appId: "1:406153568685:web:612a0c9f1bc0c6c0094124",
  measurementId: "G-3XNB77YLGE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);