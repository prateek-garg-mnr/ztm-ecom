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

// save auth user to db
export const createUserProfileDocument = async (userAuth, additionalData) => {
	// return if user is not logged in
	if (!userAuth) return;
	// create user reference
	const userRef = firestore.doc(`user/${userAuth.uid}`);
	// check for user data
	const snapshot = await userRef.get()
	// if user data don't exists then create user document
	if (!snapshot.exists) {
		const { displayName, email } = userAuth
		const createdAt = new Date()
		try {
			await userRef.set({
				displayName,email,createdAt,...additionalData
			})
		} catch (err) {
			console.log('error creating user',err)
		}
	}
	// return user reference
	return userRef
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();



const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
