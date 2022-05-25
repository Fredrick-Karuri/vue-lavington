
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // import firebase from 'firebase/app'

// // import 'firebase/firestore'

// const firebaseConfig = {
//     apiKey: "AIzaSyBqzNihRDcREDasmjS47kRPHkVs4NB6zJU",
//     authDomain: "lavington-6aa57.firebaseapp.com",
//     projectId: "lavington-6aa57",
//     storageBucket: "lavington-6aa57.appspot.com",
//     messagingSenderId: "425607292587",
//     appId: "1:425607292587:web:bc232e8ceb5b574f3239ee",
//     measurementId: "G-BJVV2GML6Q"
//   };
//   // firebase.initializeApp(config);
//   const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);
// //   const db =firebase.firestore();
// //   db.settings({timestampsInSnapshots:true});
// export default db;


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqzNihRDcREDasmjS47kRPHkVs4NB6zJU",
  authDomain: "lavington-6aa57.firebaseapp.com",
  databaseURL: "https://lavington-6aa57-default-rtdb.firebaseio.com",
  projectId: "lavington-6aa57",
  storageBucket: "lavington-6aa57.appspot.com",
  messagingSenderId: "425607292587",
  appId: "1:425607292587:web:bc232e8ceb5b574f3239ee",
  measurementId: "G-BJVV2GML6Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// const db =firestore(app);
