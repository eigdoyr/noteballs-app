import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDRYUq9sWvdOZjRafPoOuH8KnbDgvWUqxQ",
  authDomain: "noteballs-6adf7.firebaseapp.com",
  projectId: "noteballs-6adf7",
  storageBucket: "noteballs-6adf7.appspot.com",
  messagingSenderId: "920192939216",
  appId: "1:920192939216:web:fa0d043d4b7f76b777dad5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db };
