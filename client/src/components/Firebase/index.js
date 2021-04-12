import firebase from "firebase/app";
import "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmw8DOfIrFWCyPG8pj1rrTexufc5oz_Gk",
  authDomain: "la-locals.firebaseapp.com",
  projectId: "la-locals",
  storageBucket: "la-locals",
  messagingSenderId: "784320928924",
  appId: "1:784320928924:web:bfbbd69a9a30525076a159",
  measurementId: "G-2RN12CEZ2D"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { firebase, storage as default };