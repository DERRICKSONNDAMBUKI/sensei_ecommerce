import firebase from "firebase/compat/app";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCX0bYI-7z1SQkTp-n-ct1pPvACs5QimSY",
  authDomain: "sensei-ecommerce.firebaseapp.com",
  projectId: "sensei-ecommerce",
  storageBucket: "sensei-ecommerce.appspot.com",
  messagingSenderId: "1080917020282",
  appId: "1:1080917020282:web:863766c72805b472e6b5c3",
  measurementId: "G-4WX1D6J5GB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = app.firestore;
const auth = getAuth()

export { db, auth };
