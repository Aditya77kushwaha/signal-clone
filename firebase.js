import * as firebase from "firebase";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDJwNQMcI9gW9UyhWTedAqciTyzWnkIXpk",
  authDomain: "signal-clone-6a428.firebaseapp.com",
  projectId: "signal-clone-6a428",
  storageBucket: "signal-clone-6a428.appspot.com",
  messagingSenderId: "875447939887",
  appId: "1:875447939887:web:9c3c1c49ffac95ecc827da",
  measurementId: "G-M0SLLQ21VM",
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
