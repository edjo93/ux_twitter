import React, { useEffect, useState } from "react";
import TweetContent from "./Tweet"
import { db } from "../config/fire"
import fire from "../config/fire";

const Tweet = (props) => {
  const { username } = props;

  const [tweets, setTweets] = useState([]);
  const [canRemove, setCanRemove] = useState(false);

  useEffect(() => {
    getTweets();
  }, [username]);

  const getTweets = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        
        db.collection("users").where("username", "==", props.username).onSnapshot((querySnapshot) => {
          const docs = [];
          querySnapshot.forEach((doc) => {
            docs.push({ ...doc.data(), id: doc.id });
          });

          setCanRemove(user.email === docs[0].email);

          db.collection("tweets").where("usuario", "==", docs[0].email).onSnapshot((querySnapshot) => {
            const docs2 = [];
            querySnapshot.forEach((doc) => {
              docs2.push({ ...doc.data(), id: doc.id });
            });

            setTweets(docs2);
          });
        });

        // db.collection("tweets").where("usuario", "==", props.username).onSnapshot((querySnapshot) => {
        //   const docs = [];
        //   querySnapshot.forEach((doc) => {
        //     docs.push({ ...doc.data(), id: doc.id });
        //   });
        //   setTweets(docs);
        //   // param.name=props.name
        // });
      }
      else {
        let fetchedUser;
        db.collection("users").where("username", "==", props.username).onSnapshot((querySnapshot) => {
          const docs = [];
          querySnapshot.forEach((doc) => {
            docs.push({ ...doc.data(), id: doc.id });
          });

          db.collection("tweets").where("usuario", "==", docs[0].email).onSnapshot((querySnapshot) => {
            const docs2 = [];
            querySnapshot.forEach((doc) => {
              docs2.push({ ...doc.data(), id: doc.id });
            });
            setTweets(docs2);
          });
        });
      }
    });

  };

  return (
    <div>
      {tweets.map((tweet, index) => <TweetContent removable={canRemove} key={`tweet-${index}`} name={props.name} username={props.username} content={tweet.contenido} hashtags={tweet.hashtags} id={tweet.id} profilepic={props.profilepic} />)};
    </div>
  );
};

export default Tweet;









