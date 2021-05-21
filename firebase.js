import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD8C_hxbGwh-v_aZPGG9eKS7PfP8DujYqo",
    authDomain: "whatsapp-eefc6.firebaseapp.com",
    databaseURL: "https://whatsapp-eefc6-default-rtdb.firebaseio.com",
    projectId: "whatsapp-eefc6",
    storageBucket: "whatsapp-eefc6.appspot.com",
    messagingSenderId: "148211424799",
    appId: "1:148211424799:web:3441e24ed7e5809b16ff2a"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = firebase.firestore();
const auth = app.auth();

const provider = new firebase.auth.GoogleAuthProvider();


export { db, auth, provider };