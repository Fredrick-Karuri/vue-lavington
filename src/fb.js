
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// import 'firebase/firestore'


// const firebaseConfig = {
//   apiKey: "AIzaSyBqzNihRDcREDasmjS47kRPHkVs4NB6zJU",
//   authDomain: "lavington-6aa57.firebaseapp.com",
//   databaseURL: "https://lavington-6aa57-default-rtdb.firebaseio.com",
//   projectId: "lavington-6aa57",
//   storageBucket: "lavington-6aa57.appspot.com",
//   messagingSenderId: "425607292587",
//   appId: "1:425607292587:web:bc232e8ceb5b574f3239ee",
//   measurementId: "G-BJVV2GML6Q"
// };

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


// import firebase from 'firebase/app';
// import 'firebase/firestore';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore';

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

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

// export const db = firebaseApp.firestore();