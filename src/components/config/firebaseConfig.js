import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDk2cY1PQcCtVmnG9J1cTrtCf2OchVO0VQ",
  authDomain: "testingground-d71c7.firebaseapp.com",
  databaseURL: "https://testingground-d71c7.firebaseio.com",
  projectId: "testingground-d71c7",
  storageBucket: "",
  messagingSenderId: "787047178881",
  appId: "1:787047178881:web:6864c177b3f3224a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();
export default firebase;
