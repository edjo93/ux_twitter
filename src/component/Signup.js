import React, { Component } from "react";
import '../custom.css'
import fire from "../config/fire";

class Signup extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
        this.state = {
            email: "",
            password: "",
            username: "",
            firstName: "",
            lastName: "",
            month: "Enero",
            year: "2001",
            day: "1"
        };
    }


    signup(e) {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
            console.log(u)
        }).catch((err) => {
            console.log(err);
        })
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state.email);
    }

    render() {
        return (
            <div class="form-group align-items-center login">
                <h1>Crea tu cuenta</h1>
                <h3>Ingrese sus Datos:</h3>
                <div class="form-group">
                    <label for="usr">Email:</label>
                    <input type="text" name="email" class="form-control" id="usr" onChange={this.handleChange} value={this.state.email} />
                </div>
                <div class="form-group">
                    <label for="name">Nombre:</label>
                    <input type="text" name="nombre" class="form-control" id="name" onChange={this.handleChange} value={this.state.name} />
                </div>
                <div class="form-group">
                    <p>Ingrese su fecha de nacimiento</p>
                    <div class="row">
                        <div class="col-sm-4">
                            <p>Año</p>
                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {this.state.year}
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                    <button class="dropdown-item" type="button">Action</button>
                                    <button class="dropdown-item" type="button">Another action</button>
                                    <button class="dropdown-item" type="button">Something else here</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <p>Mes</p>
                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" title="asd">
                                    {this.state.month}
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenu3">
                                    <button class="dropdown-item" type="button">Action</button>
                                    <button class="dropdown-item" type="button">Another action</button>
                                    <button class="dropdown-item" type="button">Something else here</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <p>Día</p>
                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {this.state.day}
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenu4">
                                    <button class="dropdown-item" type="button">asd</button>
                                    <button class="dropdown-item" type="button">Another action</button>
                                    <button class="dropdown-item" type="button">Something else here</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <button type="button" class="btn btn-primary" onClick={this.signup}>Signup</button>
                </div>

            </div>
        );
    }
}


export default Signup;