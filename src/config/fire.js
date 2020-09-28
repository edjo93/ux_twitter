import firebase from 'firebase';
import "firebase/firestore";
import "firebase/storage"


var firebaseConfig = {
	apiKey: "AIzaSyA4azd3C3FFb9ljA3nHY0HQbcw3UsBRsCM",
    authDomain: "twitter-5ccd4.firebaseapp.com",
    databaseURL: "https://twitter-5ccd4.firebaseio.com",
    projectId: "twitter-5ccd4",
    storageBucket: "twitter-5ccd4.appspot.com",
    messagingSenderId: "981584347786",
    appId: "1:981584347786:web:6808a314b875af36852373",
    measurementId: "G-D50T5573VB"
 
};

class Firebase{
    async logout(){
        await firebase.auth().signOut().catch((err) =>{
            console.log(err);
        });
    }
}



const fire = firebase.initializeApp(firebaseConfig);

export const db = fire.firestore();

export const storage = fire.storage();

export default fire;

