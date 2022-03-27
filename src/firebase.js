
import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyCGPfCQpovwEhncFJf6RVhBlamH1VowdGs",
  authDomain: "ticket-5de9b.firebaseapp.com",
  projectId: "ticket-5de9b",
  storageBucket: "ticket-5de9b.appspot.com",
  messagingSenderId: "26696224255",
  appId: "1:26696224255:web:921ea5d6b4fea987522bca",
  measurementId: "G-HTJFE1HZBM"
};

// Initialize Firebase
const db = getDatabase(initializeApp(firebaseConfig));
export default db;
