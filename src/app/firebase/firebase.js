// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJT-5H7ejT6_K5iLs4vKLmiYco3O0XvSc",
  authDomain: "samvit-fest.firebaseapp.com",
  projectId: "samvit-fest",
  storageBucket: "samvit-fest.appspot.com",
  messagingSenderId: "1042167525604",
  appId: "1:1042167525604:web:4adc91414d664677e5fcf1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;