// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const environment = {
  apiKey: "AIzaSyCJeAFXn82rOi4xmQN5DQVizj1mUJCku_U",
  authDomain: "shop-49692.firebaseapp.com",
  projectId: "shop-49692",
  storageBucket: "shop-49692.firebasestorage.app",
  messagingSenderId: "254054670008",
  appId: "1:254054670008:web:b49c3a7f7cbcca0b701e4d",
  measurementId: "G-83LQ7KJTW6"
};

// Initialize Firebase
const app = initializeApp(environment);
const analytics = getAnalytics(app);