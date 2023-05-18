import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDRYUq9sWvdOZjRafPoOuH8KnbDgvWUqxQ",
  authDomain: "noteballs-6adf7.firebaseapp.com",
  projectId: "noteballs-6adf7",
  storageBucket: "noteballs-6adf7.appspot.com",
  messagingSenderId: "920192939216",
  appId: "1:920192939216:web:fa0d043d4b7f76b777dad5",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
