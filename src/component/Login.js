import React, { useState } from "react";
import '../custom.css'
import fire from "../config/fire";

import { useHistory } from "react-router-dom";


    const Login = (props) => {
        const history = useHistory();

        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");

        const login = (e) => {
            e.preventDefault();
            fire.auth().signInWithEmailAndPassword(email, password).then((u) => {
                console.log(u);
                history.push("/");
            }).catch((err) => {
                console.log(e);
            })
        }

        function signup() {
            history.push("/signup");
        }

        const handleChange = (e) => {
            const { name, value } = e.target;
            if (name === "email") {
                setEmail(value);
            } else {
                setPassword(value);
            }
        }

        return (
            <div class="form-group align-items-center login">
                <div class="card-panel">
                    <h1>Ingrese sus datos:</h1>
                    <div class="form-group">
                        <label for="usr">Email:</label>
                        <input type="text" name="email" class="form-control" id="usr" onChange={handleChange} value={email} />
                    </div>
                    <div class="form-group">
                        <label for="pwd">Contraseña:</label>
                        <input type="password" name="password" class="form-control" id="pwd" onChange={handleChange} value={password} />
                    </div>

                    <div class="row form-group">
                        <button type="button" class="btn btn-primary" onClick={login} to="/home">Login</button>
                    </div>
                    <div class="row">
                        <button type="button" class="btn btn-primary" onClick={signup}>Signup</button>
                    </div>

                </div>
            </div>
        );
    }


    export default Login;