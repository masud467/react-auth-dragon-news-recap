// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBKYGGqnUUqRwI_4JaYdC_wC19dAiXXEY",
  authDomain: "react-auth-dragon-news-4b339.firebaseapp.com",
  projectId: "react-auth-dragon-news-4b339",
  storageBucket: "react-auth-dragon-news-4b339.appspot.com",
  messagingSenderId: "66513515499",
  appId: "1:66513515499:web:46494382ba7df86ad99fae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app