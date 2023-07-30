import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD7MBYh1IBT0Nz35lWkeIOm-c7eoerJksU",
  authDomain: "cakelbakes-b7950.firebaseapp.com",
  projectId: "cakelbakes-b7950",
  storageBucket: "cakelbakes-b7950.appspot.com",
  messagingSenderId: "95450015963",
  appId: "1:95450015963:web:33bae14405845d30a104fe",
  measurementId: "G-F7921QXK2R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
