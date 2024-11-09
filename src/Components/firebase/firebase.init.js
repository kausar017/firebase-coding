// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrLqutTD70UsX6pHx-jo0uIJh4kIa6oWk",
  authDomain: "fir-projects-70420.firebaseapp.com",
  projectId: "fir-projects-70420",
  storageBucket: "fir-projects-70420.firebasestorage.app",
  messagingSenderId: "316877242938",
  appId: "1:316877242938:web:2ef79935e99f6cbb886b03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
export default auth;