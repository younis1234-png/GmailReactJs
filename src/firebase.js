import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvni-e0gjau31e7YOjRRFdQkl_MAAXuq8",
  authDomain: "gamilclone.firebaseapp.com",
  projectId: "gamilclone",
  storageBucket: "gamilclone.appspot.com",
  messagingSenderId: "668454009433",
  appId: "1:668454009433:web:67b7e5a799f16890b50f48",
  measurementId: "G-XXQ4PWR541"
};

// /we can use this as key to get into our firebase backend 
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider(); //for auth signup

export { auth, provider };
export default db;