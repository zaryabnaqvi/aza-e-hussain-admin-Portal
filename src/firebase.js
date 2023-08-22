// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBM17tl6kFdzaahFDe1v2XKUZUoKIihWQ8",
  authDomain: "aza-e-hussain-1d1cc.firebaseapp.com",
  projectId: "aza-e-hussain-1d1cc",
  storageBucket: "aza-e-hussain-1d1cc.appspot.com",
  messagingSenderId: "662408457520",
  appId: "1:662408457520:web:f02c705c3decba0ee0acf5",
  measurementId: "G-R911QDPZ6X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);