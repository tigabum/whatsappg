import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBg675aHeeZvZU1iDOe42zrG5-0lOE6mJc",
  authDomain: "whatsapp-653e8.firebaseapp.com",
  projectId: "whatsapp-653e8",
  storageBucket: "whatsapp-653e8.appspot.com",
  messagingSenderId: "488234859944",
  appId: "1:488234859944:web:7ce452f505f26cec7ff19d",
  measurementId: "G-4GG6BRTMP4"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export {auth, provider};
export default db;