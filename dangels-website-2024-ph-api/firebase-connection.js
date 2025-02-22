// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBEcCOmJ7GiK_mlAfasDCLuCzshJRvW8g",
  authDomain: "dangels-website-2024-ph.firebaseapp.com",
  projectId: "dangels-website-2024-ph",
  storageBucket: "dangels-website-2024-ph.firebasestorage.app",
  messagingSenderId: "254460630055",
  appId: "1:254460630055:web:c3ce0c3755c17306c1ea02",
  measurementId: "G-GY9NQM9K33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);