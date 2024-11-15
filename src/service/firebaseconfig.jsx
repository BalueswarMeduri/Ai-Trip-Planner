// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFLXkrteNFSc47mBjZTjc-fu35ljUVZhw",
  authDomain: "ai-trip-planner-701a6.firebaseapp.com",
  projectId: "ai-trip-planner-701a6",
  storageBucket: "ai-trip-planner-701a6.firebasestorage.app",
  messagingSenderId: "574190713914",
  appId: "1:574190713914:web:ebf00f8dc460aa37b9c903",
  measurementId: "G-NEY8Z3222C"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
