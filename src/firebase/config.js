import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBVZxg9AsWVRU0_ENqFMYIXNvwceT8uYfg",
    authDomain: "mymoney-37b1a.firebaseapp.com",
    projectId: "mymoney-37b1a",
    storageBucket: "mymoney-37b1a.appspot.com",
    messagingSenderId: "1073745918905",
    appId: "1:1073745918905:web:4eee558e2860024f6c1468"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// Timestamp
const timestamp = firebase.firestore.Timestamp

export {projectFirestore, projectAuth, timestamp}