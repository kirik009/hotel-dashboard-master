import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyANKJqPl02UboGYqX_w2GZapTmUBVCXyFQ",
  authDomain: "hotel-4d492.firebaseapp.com",
  projectId: "hotel-4d492",
  storageBucket: "hotel-4d492.appspot.com",
  messagingSenderId: "196878216249",
  appId: "1:196878216249:web:3401cdb98a6989829631e8",
  measurementId: "G-Y2XSBMP0M9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
