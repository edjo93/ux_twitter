import React, { Component } from "react";
import Navbar from "./Navbar"
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
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
                                    <textarea class="form-control" placeholder="What's happening" id="txt-texto"></textarea>
                                    <input type="text" class="form-control hashtags-input" placeholder="Hashtags" id="txt-hash" />
                                    <button type="button" class="btn btn-primary" id="btn-nuevo">Tweet</button>
                                </div>

                                <div id="div-tweets">


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