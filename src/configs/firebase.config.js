const firebase = require("firebase");
// const admin = require("firebase-admin");

const firebaseConfig = {
  apiKey: "AIzaSyCzGAPf9I82MmcXDK4kPjGXwlq5qVeddMM",
  authDomain: "fir-apis-8f7bb.firebaseapp.com",
  projectId: "fir-apis-8f7bb",
  storageBucket: "fir-apis-8f7bb.appspot.com",
  messagingSenderId: "209576235632",
  appId: "1:209576235632:web:2e00c0b31dfa7de446dab5",
  measurementId: "G-WV80E36JKC"
};
firebase.initializeApp(firebaseConfig);
// admin.initializeApp(firebaseConfig);
const db = firebase.firestore();
// const db = admin.firestore();
const User = db.collection("Users");
module.exports = User;