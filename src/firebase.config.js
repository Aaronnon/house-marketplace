// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC3_YPUN988lgq70_N5y0N5L4sL7WVL5oQ",
    authDomain: "house-marketplace-app-202f0.firebaseapp.com",
    projectId: "house-marketplace-app-202f0",
    storageBucket: "house-marketplace-app-202f0.appspot.com",
    messagingSenderId: "789108073356",
    appId: "1:789108073356:web:d7b7f3e87be0d762cfeca9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore()