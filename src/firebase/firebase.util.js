import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBwBKoHBT1c_PPHSTgvsrVZLeLyVK7wQVQ",
    authDomain: "clothing-project-1.firebaseapp.com",
    databaseURL: "https://clothing-project-1.firebaseio.com",
    projectId: "clothing-project-1",
    storageBucket: "clothing-project-1.appspot.com",
    messagingSenderId: "28786581345",
    appId: "1:28786581345:web:bc9f30c8cbb556f331af20",
    measurementId: "G-S7VDRLL9PT"
};

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;