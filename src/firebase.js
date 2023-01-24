import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


const firebaseConfig = {
  apiKey: "AIzaSyC0Ze6njdxE7zwVBnhZrIjqArAf0PUN-gw",

  authDomain: "twitter-clone20230114a.firebaseapp.com",

  projectId: "twitter-clone20230114a",

  storageBucket: "twitter-clone20230114a.appspot.com",

  messagingSenderId: "507614479857",

  appId: "1:507614479857:web:9a78f64f5ddc5803c0f050"

};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default db;
export { auth, provider};
