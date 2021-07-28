import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCr8l5te3kpQQ4L9TwOifOMQsGkZtPpaYI",
    authDomain: "coderappromano.firebaseapp.com",
    projectId: "coderappromano",
    storageBucket: "coderappromano.appspot.com",
    messagingSenderId: "103413245086",
    appId: "1:103413245086:web:3bf0377a746a07d09e878f"
};
// Initialize Firebase


firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuth = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuth,
    firebase
}