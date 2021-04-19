import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCuZTbHvh-SLEcbayVJ5R9fBYqtqpeyeuA",
    authDomain: "instagram-efa0a.firebaseapp.com",
    projectId: "instagram-efa0a",
    storageBucket: "instagram-efa0a.appspot.com",
    messagingSenderId: "158674864245",
    appId: "1:158674864245:web:e356837a446b1779f1503c",
    measurementId: "G-VEPZEKCWVV"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();


export  {db,auth,storage};