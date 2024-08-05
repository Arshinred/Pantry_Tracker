// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0stNXoexoqt8IWAsFo5pfrjsFbFPvpAc",
  authDomain: "inventory-managment-ah.firebaseapp.com",
  projectId: "inventory-managment-ah",
  storageBucket: "inventory-managment-ah.appspot.com",
  messagingSenderId: "808259681828",
  appId: "1:808259681828:web:7ade69b1f4f06b6634a2b1",
  measurementId: "G-CTQLX5MBSN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)

export {firestore}