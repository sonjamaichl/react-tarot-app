// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
//HIDE API KEY ETC: https://www.makeuseof.com/react-api-keys-store-access/

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

//https://www.makeuseof.com/react-app-firebase-connect/

// initialize Firebase
export const app = initializeApp(firebaseConfig);

//init firestore services
export const firestore = getFirestore(app)

// FIREBASE AUTH => import getAuth
//=> uses a json web token to authenticate users who sign up or log in /log out => token is sent to firebase server to authenticate the request
export const auth = getAuth(app);