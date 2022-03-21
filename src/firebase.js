// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);