// Import the functions you need from the SDKs you need
import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB5ZwtBT9ri44PpC2RgiPFhdNTC0Sot7Iw",
  authDomain: "buddy-347420.firebaseapp.com",
  projectId: "buddy-347420",
  storageBucket: "buddy-347420.appspot.com",
  messagingSenderId: "202859827672",
  appId: "1:202859827672:web:7484cba43fba1f1620e2ad",
  measurementId: "G-4R04K4CKJ5"
};

// Initialize Firebase

const db = firebase.firestore();


export default {
  firebase, db
}