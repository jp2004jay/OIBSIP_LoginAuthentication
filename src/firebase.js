import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDlRKm5C0hr5e_SffPBn45DyL8TRZWqWz8",
  authDomain: "sign-up-login-82684.firebaseapp.com",
  projectId: "sign-up-login-82684",
  storageBucket: "sign-up-login-82684.appspot.com",
  messagingSenderId: "497962148036",
  appId: "1:497962148036:web:8a9f9bedeece0684d66991",
  measurementId: "G-ZGKN2E7399"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {app, auth};