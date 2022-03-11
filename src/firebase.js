import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDDrI57WTRrDaQ4girH7Fa0Jesc34VF8tw",
  authDomain: "linkedin-clone-3a80c.firebaseapp.com",
  projectId: "linkedin-clone-3a80c",
  storageBucket: "linkedin-clone-3a80c.appspot.com",
  messagingSenderId: "56953800799",
  appId: "1:56953800799:web:7fbaf36bc150c194f033ea",
  measurementId: "G-5EQ75MS1JR"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};