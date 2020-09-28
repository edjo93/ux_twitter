import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Tweet from "./tweetSquare";
import { db } from "../config/fire";

const User = (props) => {
    const { userId } = useParams();

    const [data, setData] = useState({})

    useEffect(() => {
        fetchUser();
    }, [userId]);

    const fetchUser = () => {
        db.collection("users").where("username", "==", userId).onSnapshot((querySnapshot) => {
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id });
            });
            setData(docs[0]);
        });
    }

    return (
        <div>
            <Navbar />
            <main role="main" class="container">
                <div class="starter-template">
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="col-lg-12">
                                <div class="card black-text">
                                    <div class="row">
                                        <div class="col col-lg-4 col-md-6">
                                            <img src={data.profilepic } alt="" id="img" className="img img-profile" />
                                        </div>
                                        <div class="col col-lg-8 col-md-6">
                                            <h4>{data.name || ''}</h4>
                                            <div id="div-usuarioactual" class="blue-text">
                                                <h5>@{data.username || ''}</h5>
                                            </div>
                                            <h6>Tweets: {data.numTweets || ''}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {!!data.name && (
                            <div class="col-lg-8">
                                <div id="div-tweets">
                                    <Tweet name={data.name} username={data.username} profilepic={data.profilepic} />
                                </div>
                            </div>
                        )}
                    </div>
                </div>

            </main>

        </div>
    );


};

export default User;
