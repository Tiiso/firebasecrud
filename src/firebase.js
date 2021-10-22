//import * as firebase from "firebase";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBt76udVKppYYZ7LL3-tO7ArES2tY6Si3I",
  authDomain: "fir-crud-de18e.firebaseapp.com",
  databaseURL: "https://fir-crud-de18e-default-rtdb.firebaseio.com/",
  projectId: "fir-crud-de18e",
  storageBucket: "fir-crud-de18e.appspot.com",
  messagingSenderId: "935662309435",
  appId: "1:935662309435:web:1f613130ebc539424ecc1e"
};
// Initialize Firebase
var fireDb = initializeApp(firebaseConfig);

export default fireDb;