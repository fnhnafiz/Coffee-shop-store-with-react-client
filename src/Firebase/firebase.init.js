// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2lbE3flYloZterEDkqWy_Nq7Wf-7T6A0",
  authDomain: "coffee-maker-store-auth.firebaseapp.com",
  projectId: "coffee-maker-store-auth",
  storageBucket: "coffee-maker-store-auth.firebasestorage.app",
  messagingSenderId: "961684386112",
  appId: "1:961684386112:web:887243e838f87da6624aa5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;
