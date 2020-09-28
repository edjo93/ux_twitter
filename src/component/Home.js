import React, { Component } from "react";
import Navbar from "./Navbar";
import Tweet from "./tweetSquare";
import { db } from "../config/fire";
import fire from "../config/fire";
import firebase from 'firebase';
import "../custom.css"



class Home extends Component {



    constructor(props) {
        super(props)
        this.state = {
            contenido: "",
            hashtags: "",
            usuario: "",
            user: {}
        };
        this.manejarEntrada = this.manejarEntrada.bind(this);

    }
    componentDidMount() {
        this.authListener();
    }

    authListener() {

        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                db.collection("users").where("email", "==", user.email).onSnapshot((querySnapshot) => {
                    const docs = [];
                    querySnapshot.forEach((doc) => {
                        docs.push({ ...doc.data(), id: doc.id });
                    });
                    this.setState({ ...this.state, user: docs[0] });
                    console.log(docs[0].name);
                });
            }
            else {
                console.log("No autenticado");
            }
        });
    }

    manejarEntrada(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }


    render() {
        //enviar datos a firebase
        const add = async () => {
            this.state.usuario = this.state.user.email;

            const { contenido, hashtags, user } = this.state;
            const payload = {
                contenido,
                hashtags,
                usuario: user.email,
                time: new Date()
            };

            await db.collection('tweets').doc().set(payload);
            tweetcount();
        }

        const tweetcount = () => {
            const dba = firebase.firestore();
            const increment = firebase.firestore.FieldValue.increment(1);
            const statsRef = dba.collection('users').doc(this.state.user.id);
            statsRef.update({ numTweets: increment });
        }

        return (
            <div>
                <Navbar />
                <main role="main" class="container">
                    <div class="starter-template">
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="card black-text">
                                    <div class="row">
                                        <div class="col col-lg-4">
                                            <img src={this.state.user.profilepic} alt="" id="img" className="img img-profile" />
                                        </div>
                                        <div class="col col-lg-8">
                                            <h4>{this.state.user.name}</h4>
                                            <div id="div-usuarioactual" class="blue-text">
                                                <h5>@{this.state.user.username}</h5>
                                            </div>
                                            <h6>Tweets: {this.state.user.numTweets}</h6>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="col-lg-8">

                                <div class="component  text-left">

                                    <textarea class="form-control" value={this.state.contenido} name="contenido" onChange={this.manejarEntrada} placeholder="What's happening" id="txt-texto"></textarea>
                                    <input type="text" class="form-control hashtags-input" value={this.state.hashtags} name="hashtags" onChange={this.manejarEntrada} placeholder="Hashtags" id="txt-hash" />
                                    <button type="button" onClick={add} class="btn btn-primary" id="btn-nuevo">Tweet</button>

                                </div>
                                {!!this.state.user.name && (
                                    <div id="div-tweets">
                                        <Tweet name={this.state.user.name} username={this.state.user.username} profilepic={this.state.user.profilepic} />
                                    </div>
                                )}
                            </div>


                        </div>
                    </div>

                </main>

            </div>
        )
    }
}

export default Home;