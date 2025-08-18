// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, updateProfile } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFjx-djJanb3hduExoq0lFFBYJ2l1B-Ic",
  authDomain: "netflix-gpt-12345.firebaseapp.com",
  projectId: "netflix-gpt-12345",
  storageBucket: "netflix-gpt-12345.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef123456",
  measurementId: "G-XXXXXXXXXX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Temporarily disable analytics to avoid configuration errors
// const analytics = getAnalytics(app);
export const auth = getAuth(app);

// Function to update user profile
export const updateUserProfile = async (displayName, photoURL = null) => {
  const user = auth.currentUser;
  if (!user) {
    throw new Error("No user is currently signed in");
  }

  try {
    const updateData = { displayName };
    if (photoURL) {
      updateData.photoURL = photoURL;
    }

    await updateProfile(user, updateData);
    return user;
  } catch (error) {
    console.error("Error updating user profile:", error);
    throw error;
  }
};