// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJ6LyuK4yIxJVoe-iN7WOutmD7NiR55_0",
  authDomain: "jouli-nail.firebaseapp.com",
  projectId: "jouli-nail",
  storageBucket: "jouli-nail.appspot.com",
  messagingSenderId: "1362598883",
  appId: "1:1362598883:web:45ca3bb528cf2745c5ded6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
