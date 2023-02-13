// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcRBhn6HDXQEmb0EQ8rKGp8N8kbinIDHE",
  authDomain: "ecommercewebsite-8a5e5.firebaseapp.com",
  projectId: "ecommercewebsite-8a5e5",
  storageBucket: "ecommercewebsite-8a5e5.appspot.com",
  messagingSenderId: "223937186378",
  appId: "1:223937186378:web:e44f3a9b9771ffc3ff74b3",
  measurementId: "G-LDVH23K5RT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);