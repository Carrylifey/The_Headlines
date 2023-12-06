import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc, getDoc } from "firebase/firestore";

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
const db = getFirestore(app);

export const setUserFavorites = async (userId, favorites) => {
  try {
    const userRef = doc(db, "users", userId);
    await setDoc(userRef, { favorites });
    console.log("Favorites updated successfully");
  } catch (error) {
    console.error("Error updating favorites:", error);
  }
};
export const getUserFavorites = async (userId) => {
  const userDoc = await getDoc(doc(db, "users", userId));
  return userDoc.exists() ? userDoc.data().favorites : [];
};
export { auth, db };
