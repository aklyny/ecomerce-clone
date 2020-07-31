import firebase from 'firebase';


const firebaseApp = firebase.initializeApp({
    
        apiKey: "AIzaSyBYZLH3rxgtobSmXsC4PUvtdDm5fZzYYVo",
        authDomain: "clone-24ee7.firebaseapp.com",
        databaseURL: "https://clone-24ee7.firebaseio.com",
        projectId: "clone-24ee7",
        storageBucket: "clone-24ee7.appspot.com",
        messagingSenderId: "610415188093",
        appId: "1:610415188093:web:1235a1cd6c43834e34f914",
        measurementId: "G-XN879SMSB8"
      
});

// const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth}