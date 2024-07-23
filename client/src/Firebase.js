// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:  import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "germ-blog.firebaseapp.com",
  projectId: "germ-blog",
  storageBucket: "germ-blog.appspot.com",
  messagingSenderId: "895366655124",
  appId: "1:895366655124:web:275a919831060faa76d881"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
 