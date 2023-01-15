import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyB2hk7R1uOCyZE-VMtRKp8l40nUcHhKpOY",

  authDomain: "twittercloneapp-7fc26.firebaseapp.com",

  projectId: "twittercloneapp-7fc26",

  storageBucket: "twittercloneapp-7fc26.appspot.com",

  messagingSenderId: "784349435225",

  appId: "1:784349435225:web:79e3083aa0e8257a062848",

  measurementId: "G-7JLDDHSFFS"

};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
