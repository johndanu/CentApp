import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqdIb2IJtuit8eEon_ngIxKCLD9RVDL5o",
  authDomain: "testing-3b6db.firebaseapp.com",
  databaseURL: "https://testing-3b6db.firebaseio.com",
  projectId: "testing-3b6db",
  storageBucket: "testing-3b6db.appspot.com",
  messagingSenderId: "8568042732",
  appId: "1:8568042732:web:83e57f5b8e0f54aa7e21c9",
  measurementId: "G-37JVT16DPD"
};

// var fire = firebase.initializeApp(config);

// export default fire;

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
// export default firebaseApp;
export { auth, provider, firebaseApp };
