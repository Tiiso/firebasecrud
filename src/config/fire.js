// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBt76udVKppYYZ7LL3-tO7ArES2tY6Si3I",
  authDomain: "fir-crud-de18e.firebaseapp.com",
  projectId: "fir-crud-de18e",
  storageBucket: "fir-crud-de18e.appspot.com",
  messagingSenderId: "935662309435",
  appId: "1:935662309435:web:1f613130ebc539424ecc1e"
};

// Initialize Firebase
const fire = initializeApp(firebaseConfig);

export default fire;