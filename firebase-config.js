import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCrixCCifk2kR6REaunDI05GdICX2I325o",
  authDomain: "badbank-3fefa.firebaseapp.com",
  projectId: "badbank-3fefa",
  storageBucket: "badbank-3fefa.appspot.com",
  messagingSenderId: "799151053255",
  appId: "1:799151053255:web:68e6200a15c65fbfd0a1e2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
