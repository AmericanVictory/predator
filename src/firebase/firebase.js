import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyB2-yusuhHMJ6DGYyYWMUUjE7Lp8REjZlg",
  authDomain: "electionprediction-2659c.firebaseapp.com",
  projectId: "electionprediction-2659c",
  storageBucket: "electionprediction-2659c.appspot.com",
  messagingSenderId: "49152310939",
  appId: "1:49152310939:web:e687a11c700c04773e903e",
  measurementId: "G-0ZKK6BHN9Y"
};

if (!firebase.apps.length) {
  //initializing with the config object
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();
const firestoredb = firebase.firestore(); 

export { db, auth, firestoredb };
