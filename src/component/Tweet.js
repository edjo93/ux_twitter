import React from "react";
import fire, { db } from "../config/fire"
import firebase from "firebase"

const TweetContent = (props) => {
    const { removable } = props;
    let id = "";

    fire.auth().onAuthStateChanged((user) => {
        if (user) {
            db.collection("users").where("email", "==", user.email).onSnapshot((querySnapshot) => {
                const docs = [];
                querySnapshot.forEach((doc) => {
                    docs.push({ ...doc.data(), id: doc.id });
                });
                id = docs[0].id;
            });
        }
    });

    const deleteTweet = (e) => {
        db.collection("tweets").doc(props.id).delete().then(function () {
            console.log("Eliminado");
            tweetcount();
        }).catch(function (error) {
            console.log(error);
        })
    }

    const tweetcount = () => {
        const dba = firebase.firestore();
        const increment = firebase.firestore.FieldValue.increment(-1);
        const statsRef = dba.collection('users').doc(id);
        statsRef.update({ numTweets: increment });
    }

    return (
        <div class="row component text-left">
            <div class="col-lg-2 col-sm-2">
                <img src={props.profilepic} alt="" id="img" className="img img-tweet" />
            </div>
            <div class="col-lg-10 col-sm-10">
                <b>{props.name}</b> @{props.username}
                {removable && (
                    <div class="btn-group" style={{ float: "right" }}>
                        <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                        <div class="dropdown-menu">
                            <button onClick={deleteTweet}>Delete Tweet</button>
                        </div>
                    </div>
                )}
                <div class="tweet-content">
                    {props.content}
                    <div>
                        <small class="blue-text">{props.hashtags}</small>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TweetContent;