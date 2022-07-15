// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCE5pA2JSdfAPD5qnWsEEvOXEx-pI4aeLk",
  authDomain: "finanza-react.firebaseapp.com",
  databaseURL: "https://finanza-react.firebaseio.com",
  projectId: "finanza-react",
  storageBucket: "finanza-react.appspot.com",
  messagingSenderId: "88000701371",
  appId: "1:88000701371:web:d5200a9c269fdcf5ea1a9e",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
