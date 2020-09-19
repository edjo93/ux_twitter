import firebase from 'firebase';
import "firebase/firestore"


var firebaseConfig = {
	apiKey: "AIzaSyAgRgRQq7bWDz_bW4sVfZ6s4tQImpsUvA0",
  authDomain: "twee-1519c.firebaseapp.com",
  databaseURL: "https://twee-1519c.firebaseio.com",
  projectId: "twee-1519c",
  storageBucket: "twee-1519c.appspot.com",
  messagingSenderId: "196758834372",
  appId: "1:196758834372:web:0831ae386583e262650d91",
  measurementId: "G-Z72B6BDJV5"
 
};

const fire = firebase.initializeApp(firebaseConfig);

export const db = fire.firestore();

export default fire;

