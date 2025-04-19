

// firebase.js
import { initializeApp } from 'firebase/app';

// Initialize Firebase
// *** USE YOUR CONFIG OBJECT ***
const config = {
  apiKey: "AIzaSyCwUFVdDrFFNPxob1LMSW6Jiodq0wZPQew",
  authDomain: "edge-messages.firebaseapp.com",
  databaseURL: "https://edge-messages-default-rtdb.firebaseio.com",
  projectId: "edge-messages",
  storageBucket: "edge-messages.firebasestorage.app",
  messagingSenderId: "933252954121"
};

// setting a variable that initializes our application
const firebase = initializeApp(config);
// this exports the CONFIGURED version of firebase
export default firebase;