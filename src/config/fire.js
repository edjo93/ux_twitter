import firebase from 'firebase';

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

const fire = firebase.initializeApp(firebaseConfig);

export default fire;