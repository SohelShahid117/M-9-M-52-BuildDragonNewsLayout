// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvcn9jOQkUyuMC29EVQKR5YWm7hcLrPoc",
  authDomain: "ph-9-m-52-react-dragon-news.firebaseapp.com",
  projectId: "ph-9-m-52-react-dragon-news",
  storageBucket: "ph-9-m-52-react-dragon-news.appspot.com",
  messagingSenderId: "289476150227",
  appId: "1:289476150227:web:d598498bb450eaddc8e526",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
