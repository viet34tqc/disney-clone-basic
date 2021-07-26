// Your web app's Firebase configuration

import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
	apiKey: 'AIzaSyDkcFEsxsVzZDLGxymImLcWBFl1ZUvgPWE',
	authDomain: 'disneyclone-3aae5.firebaseapp.com',
	projectId: 'disneyclone-3aae5',
	storageBucket: 'disneyclone-3aae5.appspot.com',
	messagingSenderId: '1024777757861',
	appId: '1:1024777757861:web:fb583f520a41b045b9594c',
	measurementId: 'G-6KV11WQY91',
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
