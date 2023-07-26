const { initializeApp } = require("firebase/app");
const { getStorage, ref } = require("firebase/storage");

// FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyCsVy3KjuCH8rMU-Kq9wkmBxaowV9Sv8DQ",
  authDomain: "e-commerce-pwa-9f8a4.firebaseapp.com",
  projectId: "e-commerce-pwa-9f8a4",
  storageBucket: "e-commerce-pwa-9f8a4.appspot.com",
  messagingSenderId: "93982949315",
  appId: "1:93982949315:web:bfec3a5aad285bb9358776",
  measurementId: "G-FYF9QG5T4G",
};

const firebase = initializeApp(firebaseConfig);
const Storage = getStorage(firebase);

module.exports = { Storage };
