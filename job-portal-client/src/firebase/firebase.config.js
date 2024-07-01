
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAXVua1X2JHvE2jalABCadQ3UmHhmTZF3Y",
  authDomain: "job-portal-9bc0e.firebaseapp.com",
  projectId: "job-portal-9bc0e",
  storageBucket: "job-portal-9bc0e.appspot.com",
  messagingSenderId: "651540666211",
  appId: "1:651540666211:web:e7acab29858365de6be556"
};


export const app = initializeApp(firebaseConfig);

export const auth =getAuth(app);
