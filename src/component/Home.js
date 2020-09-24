import React, { Component } from "react";
import Navbar from "./Navbar";
import Tweet from "./tweetSquare";
import { db } from "../config/fire";
import fire from "../config/fire";
import firebase from 'firebase';






class Home extends Component {



    constructor(props) {
        super(props)
        this.state = {
            contenido: "",
            hashtags: "",
            usuario: ""

        };
        this.usuario = {};
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
                    this.usuario = docs[0];
                    console.log(this.usuario);
                });
            }
            else {

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
            console.log(this.state.usuario);
            this.state.usuario = this.usuario.email;
            await db.collection('tweets').doc().set(this.state);
            tweetcount();
            console.log("nuevo tweet agregado");
        }

        const tweetcount = () => {
            const dba = firebase.firestore();
            const increment = firebase.firestore.FieldValue.increment(1);
            const statsRef = dba.collection('users').doc(this.usuario.id);
            statsRef.update({ numTweets: increment });
        }




        return (
            <div>
                <Navbar />
                <main role="main" class="container">
                    <div class="starter-template">
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="row">
                                    <div class="col-lg-12">

                                        <div class="card black-text">
                                            <h4>{this.usuario.name}</h4>
                                            <div id="div-usuarioactual" class="blue-text">
                                                <h5>@{this.usuario.username}</h5>
                                            </div>
                                            <h6>Tweets: {this.usuario.numTweets}</h6>

                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="component text-left" >
                                            <h2>Trends</h2>
                                            <div id="div-trends">

                                            </div>
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

                                <div id="div-tweets">
                                    <Tweet name={this.usuario.name} username={this.usuario.username} />

                                </div>
                            </div>


                        </div>
                    </div>

                </main>

            </div>
        )
    }
}

export default Home;