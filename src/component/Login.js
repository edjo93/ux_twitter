import React, { Component} from "react";
import '../custom.css'
import fire from "../config/fire";

class Login extends Component {
    constructor(props) {
        super(props)
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
        this.state = {
            email: "",
            password: ""
        };
    }

    login(e) {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
            console.log(u)
        }).catch((err) => {
            console.log(e);
        })
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
                <h1>Ingrese sus datos:</h1>
                <div class="form-group">
                    <label for="usr">Email:</label>
                    <input type="text" name="email" class="form-control" id="usr" onChange={this.handleChange} value={this.state.email} />
                </div>
                <div class="form-group">
                    <label for="pwd">Contraseña:</label>
                    <input type="password" name="password" class="form-control" id="pwd" onChange={this.handleChange} value={this.state.password} />
                </div>

                <div class="row form-group">
                    <button type="button" class="btn btn-primary" onClick={this.login}>Login</button>
                </div>
                <div class="row">
                    <button type="button" class="btn btn-primary" onClick={this.signup}>Signup</button>
                </div>

            </div>
        );
    }
}


export default Login;