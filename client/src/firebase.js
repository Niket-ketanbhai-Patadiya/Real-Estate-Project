// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-8901b.firebaseapp.com",
  projectId: "real-estate-8901b",
  storageBucket: "real-estate-8901b.appspot.com",
  messagingSenderId: "761966720993",
  appId: "1:761966720993:web:f645ce99d89ab0f09ac4a0",
  measurementId: "G-BDJNZ7MGPT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);