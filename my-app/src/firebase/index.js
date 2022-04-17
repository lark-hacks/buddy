import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB5ZwtBT9ri44PpC2RgiPFhdNTC0Sot7Iw",
  authDomain: "buddy-347420.firebaseapp.com",
  projectId: "buddy-347420",
  storageBucket: "buddy-347420.appspot.com",
  messagingSenderId: "202859827672",
  appId: "1:202859827672:web:7484cba43fba1f1620e2ad",
  measurementId: "G-4R04K4CKJ5"
};

const app = firebase.initializeApp(firebaseConfig)

export default app;