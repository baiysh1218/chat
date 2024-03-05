import { initializeApp } from "firebase/app";
import { Auth, getAuth, GoogleAuthProvider } from "firebase/auth";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { getDatabase } from "firebase/database";

interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}

const firebaseConfig: FirebaseConfig = {
  apiKey: "AIzaSyAkrRxtK4y1xBuu5XIy89aFzeE0BAsjPbg",
  authDomain: "amo-test-29e8c.firebaseapp.com",
  projectId: "amo-test-29e8c",
  storageBucket: "amo-test-29e8c.appspot.com",
  messagingSenderId: "528784733273",
  appId: "1:528784733273:web:2f53a23528ad8983fa6d48",
};

const firebaseApp = initializeApp(firebaseConfig);

export const auth: Auth = getAuth(firebaseApp);
export const googleProvider = new GoogleAuthProvider();
export const db = getDatabase(firebaseApp);
