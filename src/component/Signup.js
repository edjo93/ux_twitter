import React, { useState, useEffect, useRef } from "react";
import '../custom.css'
import fire from "../config/fire";
import { useHistory } from "react-router-dom";

const Signup = (props) => {
    const history = useHistory()

    const daylist = [];

    const yearlist = [];

    let yeardropdown = useRef(null);

    const [data, setData] = useState({
        email: "",
        password: "",
        username: "",
        name: "",
        month: "Enero",
        year: "2001",
        day: "1"
    });




    const signup = (e) => {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(data.email, data.password).then((u) => {
            history.push("/login");
            console.log(u)
        }).catch((err) => {
            console.log(err);
        })
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    }

    const handleClick = (e) => {
        const { name, value } = e.target.innerText;
        setData({ ...data, [name]: value });
    }

    for (let index = 1; index <= 31; index++) {
        daylist.push(<button class="dropdown-item" type="button">{index}</button>)
    }

    for (let index = 1970; index <= 2001; index++) {
        yearlist.push(<button class="dropdown-item" type="button">{index}</button>)
    }


    return (
        <div class="form-group align-items-center login">
            <div class="card-panel">
                <h1>Crea tu cuenta</h1>
                <h3>Ingrese sus Datos:</h3>
                <div class="form-group">
                    <label for="usr">Email:</label>
                    <input type="text" name="email" class="form-control" id="usr" onChange={handleChange} value={data.email} />
                </div>
                <div class="form-group">
                    <label for="name">Contraseña:</label>
                    <input type="password" name="password" class="form-control" id="password" onChange={handleChange} value={data.password} />
                </div>
                <div class="form-group">
                    <label for="name">Nombre:</label>
                    <input type="text" name="name" class="form-control" id="name" onChange={handleChange} value={data.name} />
                </div>
                <div class="form-group">
                    <p>Ingrese su fecha de nacimiento</p>
                    <div class="row">
                        <div class="col-sm-4">
                            <p>Año</p>
                            <div class="dropup">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" title="asd">
                                    {data.year}
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenu3">
                                    {yearlist}
                                </div>
                            </div>

                        </div>
                        <div class="col-sm-4">
                            <p>Mes</p>
                            <div class="dropup">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" title="asd" >
                                    {data.month}
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenu3">
                                    <button class="dropdown-item" type="button" onClick={handleChange} value={data.month}>Diciembre</button>
                                    <button class="dropdown-item" type="button">Noviembre</button>
                                    <button class="dropdown-item" type="button">Octubre</button>
                                    <button class="dropdown-item" type="button">Septiembre</button>
                                    <button class="dropdown-item" type="button">Agosto</button>
                                    <button class="dropdown-item" type="button">Mayo</button>
                                    <button class="dropdown-item" type="button">Julio</button>
                                    <button class="dropdown-item" type="button">Junio</button>
                                    <button class="dropdown-item" type="button">Abril</button>
                                    <button class="dropdown-item" type="button">Marzo</button>
                                    <button class="dropdown-item" type="button">Febrero</button>
                                    <button class="dropdown-item" type="button">Enero</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <p>Día</p>
                            <div class="dropup">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {data.day}
                                </button>
                                <div class="dropdown-menu " aria-labelledby="dropdownMenu4">
                                    {daylist}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <button type="button" class="btn btn-primary" onClick={signup}>Signup</button>
                </div>
            </div>

        </div>
    );
}


export default Signup;