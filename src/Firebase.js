import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjh3yu1ih1rvIDqdDcDZw9UUFMXfh9CWM",
  authDomain: "the-headlines-news-app.firebaseapp.com",
  projectId: "the-headlines-news-app",
  storageBucket: "the-headlines-news-app.appspot.com",
  messagingSenderId: "725817113324",
  appId: "1:725817113324:web:8101e0c7c1d7b9b9cf83c9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export  { auth };
