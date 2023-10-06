import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAMo6UsmlbBC42qzZrpAK6QkE3sPNYUDdg",
  authDomain: "chat-app-24d62.firebaseapp.com",
  projectId: "chat-app-24d62",
  storageBucket: "chat-app-24d62.appspot.com",
  messagingSenderId: "706066616981",
  appId: "1:706066616981:web:d3e5e165a225039341019c",
  measurementId: "G-8DXD8F3ZBG"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
const analytics = getAnalytics(app);