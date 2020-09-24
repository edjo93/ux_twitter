import React, { useState, useEffect, useRef } from "react";
import '../custom.css'
import fire from "../config/fire";
import { db } from "../config/fire";
import { useHistory } from "react-router-dom";

const Signup = () => {
    const history = useHistory()

    const daylist = [];

    const yearlist = [];


    const [data, setData] = useState({
        email: "",
        password: "",
        username: "",
        name: "",
        month: "Enero",
        year: "2001",
        day: "1",
        numTweets: 0,
        numFollowing: 0,
        numFollowers: 0
    });


    const sign = (e) => {
        e.preventDefault();
        console.log(data)
        fire.auth().createUserWithEmailAndPassword(data.email, data.password).then((u) => {
            delete data.password;
            add();
            history.push("/login");
            console.log(u)
        }).catch((err) => {
            console.log(err);
        })
        console.log("nuevo usuario agregado");
    }


    const add = async () => {
        db.collection('users').doc().set(data);
        console.log("nuevo tweet agregado");
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    }

    const handleClick = (e) => {
        const { name } = e.target;
        const [isfor, value] = name.split("-");
        setData({ ...data, [isfor]: value });
    }

    for (let index = 1; index <= 31; index++) {
        daylist.push(<button class="dropdown-item" type="button" onClick={handleClick} name={`day-${index}`}>{index}</button>)
    }

    for (let index = 2001; index >= 1970; index--) {
        yearlist.push(<button class="dropdown-item" type="button" onClick={handleClick} name={`year-${index}`}>{index}</button>)
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
                    <label for="name">Nombre de Usuario:</label>
                    <input type="text" name="username" class="form-control" id="username" onChange={handleChange} value={data.username} />
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
                                    <button class="dropdown-item" type="button" onClick={handleClick} name="month-Diciembre">Diciembre</button>
                                    <button class="dropdown-item" type="button" onClick={handleClick} name="month-Noviembre">Noviembre</button>
                                    <button class="dropdown-item" type="button" onClick={handleClick} name="month-Octubre">Octubre</button>
                                    <button class="dropdown-item" type="button" onClick={handleClick} name="month-Septiembre">Septiembre</button>
                                    <button class="dropdown-item" type="button" onClick={handleClick} name="month-Agosto">Agosto</button>
                                    <button class="dropdown-item" type="button" onClick={handleClick} name="month-Mayo">Mayo</button>
                                    <button class="dropdown-item" type="button" onClick={handleClick} name="month-Julio">Julio</button>
                                    <button class="dropdown-item" type="button" onClick={handleClick} name="month-Junio">Junio</button>
                                    <button class="dropdown-item" type="button" onClick={handleClick} name="month-Abril">Abril</button>
                                    <button class="dropdown-item" type="button" onClick={handleClick} name="month-Marzo">Marzo</button>
                                    <button class="dropdown-item" type="button" onClick={handleClick} name="month-Febrero">Febrero</button>
                                    <button class="dropdown-item" type="button" onClick={handleClick} name="month-Enero">Enero</button>
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
                    <button type="button" class="btn btn-primary" onClick={sign}>Signup</button>
                </div>
            </div>

        </div>
    );
}


export default Signup;