import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
 
const firebaseConfig = {
  apiKey: "AIzaSyDSnh3oOTue-m7RFT2eZrBAxDI0y9zR5tg",
  authDomain: "appcripto-4983b.firebaseapp.com",
  projectId: "appcripto-4983b",
  storageBucket: "appcripto-4983b.appspot.com",
  messagingSenderId: "62645720711",
  appId: "1:62645720711:web:20cc88242ebd1894f30a22"
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app)
