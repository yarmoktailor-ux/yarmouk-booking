// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMpGKS3hm7FqFI8twabti1aHAqksvSZME",
  authDomain: "yarmouk-booking.firebaseapp.com",
  projectId: "yarmouk-booking",
  storageBucket: "yarmouk-booking.firebasestorage.app",
  messagingSenderId: "390432143096",
  appId: "1:390432143096:web:7f2c676919dc4536fd6d0d",
  measurementId: "G-GTZMRJC541"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
