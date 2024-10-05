import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Firebase Config
export const firebaseConfig = {
  apiKey: "AIzaSyAXCU8uu83AiwsmHpg2RxsgBWHKf3jIoKM",
  authDomain: "omniplex-a28a0.firebaseapp.com",
  projectId: "omniplex-a28a0",
  storageBucket: "omniplex-a28a0.appspot.com",
  messagingSenderId: "706815869863",
  appId: "1:706815869863:web:0983ec9153e11708066c82",
  measurementId: "G-YXCZKP27TG"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };

export const initializeFirebase = () => {
  return app;
};
