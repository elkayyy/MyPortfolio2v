
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const apiKey = process.env.REACT_APP_API_KEY;
const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "cyberin-e7e9b.firebaseapp.com",
  databaseURL: "https://cyberin-e7e9b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "cyberin-e7e9b",
  storageBucket: "cyberin-e7e9b.appspot.com",
  messagingSenderId: "112263495661",
  appId: "1:112263495661:web:95b820437ae6abcc41f1e4",
  measurementId: "G-FPSV4T4936"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);