import  firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD9GHJDMIuJg2sbpTlPKNMwyitmzxMYxcA",
  authDomain: "bkbooking-ab401.firebaseapp.com",
  projectId: "bkbooking-ab401",
  storageBucket: "bkbooking-ab401.appspot.com",
  messagingSenderId: "1005784894702",
  appId: "1:1005784894702:web:3920bb1309c8c7e04a77ff",
  measurementId: "G-NKD2NNPBE6"
};

firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
export {auth , firebase};

