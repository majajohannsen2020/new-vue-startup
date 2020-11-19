import firebase from "firebase/app";
import "firebase/firestore";

// Get a Firestore instance
export const db = firebase
    .initializeApp({
        apiKey: "AIzaSyDWBDstIDoUE8A0u89qy8gjIt9oYav8fjo",
        authDomain: "digital-startup-d44a3.firebaseapp.com",
        databaseURL: "https://digital-startup-d44a3.firebaseio.com",
        projectId: "digital-startup-d44a3",
        storageBucket: "digital-startup-d44a3.appspot.com",
        messagingSenderId: "1081498218387",
        appId: "1:1081498218387:web:0043c7ac6dea4ed3104266",
    })
    .firestore();

export const postRef = db.collection("posts");

