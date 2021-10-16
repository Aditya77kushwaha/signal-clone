import { getFirestore } from "firebase/firestore/lite";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDJwNQMcI9gW9UyhWTedAqciTyzWnkIXpk",
  authDomain: "signal-clone-6a428.firebaseapp.com",
  projectId: "signal-clone-6a428",
  storageBucket: "signal-clone-6a428.appspot.com",
  messagingSenderId: "875447939887",
  appId: "1:875447939887:web:9c3c1c49ffac95ecc827da",
  measurementId: "G-M0SLLQ21VM",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
