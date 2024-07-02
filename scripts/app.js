// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDr004i4D4TrGtdErk1xEYbpi-Z8kTmU5A",
    authDomain: "register-25235.firebaseapp.com",
    projectId: "register-25235",
    storageBucket: "register-25235.appspot.com",
    messagingSenderId: "496763771675",
    appId: "1:496763771675:web:b7f71183957ee1661551be",
    measurementId: "G-C3H2TJ8STK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
