import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
var firebaseConfig = {
	apiKey: "AIzaSyDH_haa3jMrFYnz4CDEELUrcTcfnvF7-mc",
	authDomain: "crwn-db-cb6f3.firebaseapp.com",
	projectId: "crwn-db-cb6f3",
	storageBucket: "crwn-db-cb6f3.appspot.com",
	messagingSenderId: "530586683452",
	appId: "1:530586683452:web:9b02378bda5a7c62f41b39",
	measurementId: "G-8KSZ0ZZB7Z",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const fireistore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
