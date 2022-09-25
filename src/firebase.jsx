import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAO4F3EG77sJSPnrzNwzKXzchqeDy7F6_A",
  authDomain: "onglass-a2c0f.firebaseapp.com",
  projectId: "onglass-a2c0f",
  storageBucket: "onglass-a2c0f.appspot.com",
  messagingSenderId: "874455637971",
  appId: "1:874455637971:web:5394a056160c5563675926"
};


export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app); 
export const auth = getAuth(app);