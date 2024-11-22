// src/firebase.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVZRUMGsE8aGijZQBhAPFu7fy3btvY_1g",
  authDomain: "forforca-a639b.firebaseapp.com",
  projectId: "forforca-a639b",
  storageBucket: "forforca-a639b.appspot.com",
  messagingSenderId: "504446342093",
  databaseURL: "https://forforca-a639b-default-rtdb.firebaseio.com/",
  appId: "1:504446342093:web:e5deb39c02fad6544aea84",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app; // Exporte a instância do app para ser usada em outros arquivos
