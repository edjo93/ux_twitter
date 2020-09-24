import React, { useEffect, useState } from "react";

import { db } from "../config/fire"
import fire from "../config/fire";



const Tweet = (props) => {

  let email = "";
  const [tweets, setTweets] = useState([]);
  const [currentId, setCurrentId] = useState("");
  const [currentUser, setCurrentuser] = useState("");

  const getTweets = async () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        email = user.email;
        db.collection("tweets").where("usuario", "==", email).onSnapshot((querySnapshot) => {
          const docs = [];
          querySnapshot.forEach((doc) => {
            docs.push({ ...doc.data(), id: doc.id });
          });
          setTweets(docs);
        });
      }
      else {

      }
    });

  };


  useEffect(() => {
    getTweets();
  }, []);




  return (



    <div>
      {tweets.map((tweet) => (

        <div class="row component text-left">
          <div class="col-lg-2">
            <img src="" class="img-fluid rounded-circle img-thumbnail" />
          </div>
          <div class="col-lg-10">
            <b>{props.name}</b> {props.username}
    <div class="tweet-content"> 
              {tweet.contenido}
              <div>
                <small class="blue-text">{tweet.hashtags}</small>
              </div>
            </div>
          </div>
        </div>




      ))};
    </div>

  );



};

export default Tweet;









