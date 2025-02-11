// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-86518.firebaseapp.com",
  projectId: "mern-blog-86518",
  storageBucket: "mern-blog-86518.firebasestorage.app",
  messagingSenderId: "634769800450",
  appId: "1:634769800450:web:5bff450a74d820ae12d61b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);