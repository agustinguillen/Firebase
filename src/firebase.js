// import firebase from 'firebase';
import firebase from 'firebase/app';

import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: 'AIzaSyC5nUWzb59B_VQarDMfZCedV9hChgBPJnA',
	authDomain: 'fb-14220-coderhouse.firebaseapp.com',
	projectId: 'fb-14220-coderhouse',
	storageBucket: 'fb-14220-coderhouse.appspot.com',
	messagingSenderId: '504993761609',
	appId: '1:504993761609:web:7543cf4873fae62a78b298',
};
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// Guardamos en una constante llamada fb
const fb = firebase.initializeApp(firebaseConfig);

// Y ahora utilizamos su método llamado firestore, lo ejecutamos y lo guardamos
// dentro de una constante llamada db. También debemos exportar
export const db = fb.firestore();
