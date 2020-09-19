import React, { useEffect, useState } from "react";

import {db} from "../config/fire"
import fire from "../config/fire";



const Tweet = () => {

  
  const [tweets, setTweets] = useState([]);
  const [currentId, setCurrentId] = useState("");
  const [currentUser,SetCurrentUSer] = useState("")

  const actualizarUser = () =>{
    fire.auth().onAuthStateChanged((user)=>{
      if(user)
      {
        //console.log(user.email)
        SetCurrentUSer({currentUser:user.email});
        
      }
      else{
        
      }
    });

  }


  

  const getTweets = async () => {

    
    

    db.collection("tweets").where("usuario","==","eddas.carrasco@unitec.edu").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setTweets(docs);
    });
  };


  useEffect(() => {
    getTweets();
  }, []);




  return(


    
    <div>
    {tweets.map((tweet) => (

        <div class="row component text-left">
  <div class="col-lg-2">  
    <img src = "" class="img-fluid rounded-circle img-thumbnail"/>
  </div>
  <div class="col-lg-10">
    <b>tweet.username</b> tweet.nickname
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


  

	

  


