import React, { Component } from "react";
import Navbar from "./Navbar";
import Tweet from "./tweetSquare";
import {db} from "../config/fire";
import fire from "../config/fire";






class Home extends Component {

    

    constructor(props) {

        super(props)
        this.state = {
            contenido:"",
            hashtags:"",
            usuario:""

        };
        this.manejarEntrada = this.manejarEntrada.bind(this);
        

    }

   

        componentDidMount()
      {
        this.authListener();
        
      }
      authListener(){
        fire.auth().onAuthStateChanged((user)=>{
          if(user)
          {

            this.setState({usuario: user.email})
            
          }
          else{
            
          }
        })
      }

    manejarEntrada(e) {
      const {name, value} = e.target;

      this.setState({
         [name]: value
      });
    }

    

    render() {

        //enviar datos a firebase
        const add = async () => {
            await db.collection('tweets').doc().set(this.state)
            console.log("nuevo tweet agregado")
        }

        


        return (
            <div>
                <Navbar/>

                
                <main role="main" class="container">    

                      

                    <div class="starter-template">
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="row">
                                    <div class="col-lg-12">

                                        <div class="component text-center">
                                            <select class="form-control" id="slc-usuario">
                                                <option value="1">Lionel Messi</option>
                                                <option value="2">Iker Casillas</option>
                                            </select>
                                            <div id="div-usuarioactual">

                                            </div>

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
                                     
                                    <textarea class="form-control" value={this.state.contenido} name="contenido" onChange ={this.manejarEntrada} placeholder="What's happening" id="txt-texto"></textarea>
                                    <input type="text" class="form-control hashtags-input" value={this.state.hashtags} name="hashtags" onChange ={this.manejarEntrada} placeholder="Hashtags" id="txt-hash" />
                                    <button type="button" onClick= {add} class="btn btn-primary" id="btn-nuevo">Tweet</button>
                                    
                                </div>
                            
                                <div id="div-tweets">
                                    <Tweet/>

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