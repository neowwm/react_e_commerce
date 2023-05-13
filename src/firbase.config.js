// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZiRjWaXmb9YDO-IGWwKIiDCCnW2QRyDA",
  authDomain: "shoppingapp-4d837.firebaseapp.com",
  projectId: "shoppingapp-4d837",
  storageBucket: "shoppingapp-4d837.appspot.com",
  messagingSenderId: "78146031849",
  appId: "1:78146031849:web:ad5119de19d7f0718c6078",
  measurementId: "G-7H5TD21GPN",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
