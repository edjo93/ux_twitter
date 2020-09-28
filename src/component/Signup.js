import React, { useState } from "react";
import '../custom.css'
import fire from "../config/fire";
import { db, storage } from "../config/fire";
import { useHistory } from "react-router-dom";
import Alert from "./alert"

const Signup = () => {
    const history = useHistory()

    const daylist = [];

    const yearlist = [];

    const [alertPassword, setAlertPassword] = useState(false);

    const [alertEmail, setAlertEmail] = useState(false);

    const [image, setImage] = useState();

    const messages = {
        password: "Ingrese una contraseña con mas de 7 caracteres",
        email: "Ingrese un correo valido"
    }




    const [data, setData] = useState({
        email: "",
        password: "",
        username: "",
        name: "",
        month: "Enero",
        year: "2001",
        day: "1",
        numTweets: 0,
        profilepic: "https://firebasestorage.googleapis.com/v0/b/twitter-5ccd4.appspot.com/o/images%2F240_F_64678017_zUpiZFjj04cnLri7oADnyMH0XBYyQghG.jpg?alt=media&token=2cb8a585-e043-44a8-bce4-e3b14422c06d"
    });


    const sign = (e) => {
        e.preventDefault();
        add();
        setAlertPassword(false);
        setAlertEmail(false);
        fire.auth().createUserWithEmailAndPassword(data.email, data.password).then((u) => {
            delete data.password;
            history.push("/login");
        }).catch((err) => {
            if (err.code === "auth/weak-password") {
                setAlertPassword(true);
            } else if (err.code === "auth/invalid-email") {
                setAlertEmail(true);
            }
        })
    }


    const add = async () => {
        console.log("inicia");
        let url1;
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        console.log("storage");
        uploadTask.on('state_changed',
            (snapshot) => {

            },
            (error) => {

            },
            async () => {
                storage.ref('images').child(image.name).getDownloadURL().then(url => {
                    url1=url;
                    const updatedData = ({
                        email: data.email,
                        username: data.username,
                        name: data.name,
                        month: data.month,
                        year: data.year,
                        day: data.day,
                        numTweets: data.numTweets,
                        profilepic: url1
                    });
                    db.collection('users').doc().set(updatedData);
                })
            })
            console.log(url1);
        console.log("nuevo tweet agregado");
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
        console.log(image)
    }
    const handleClick = (e) => {
        const { name } = e.target;
        const [isfor, value] = name.split("-");
        setData({ ...data, [isfor]: value });
    }

    const imageHandler = (e) => {
        if (e.target.files[0]) {
            console.log(e.target.files[0]);
            const image = e.target.files[0];
            setImage(image);
        }
        updateImg(e);
    }

    const updateImg = (e) => {
        let image = e.target.files[0];
        setData({ ...data, ["profilepic"]: URL.createObjectURL(image) });
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
                {alertEmail ? <Alert message={messages.email} /> : null}
                <div class="form-group">
                    <label for="name">Contraseña:</label>
                    <input type="password" name="password" class="form-control" id="password" onChange={handleChange} value={data.password} />
                </div>
                {alertPassword ? <Alert message={messages.password} /> : null}
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
                <form>
                    <p>Eliga una foto de perfil:</p>
                    <div className="img-holder">
                        <img src={data.profilepic} alt="" id="img" className="img img-select" />
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlFile1">Profile Picture</label>
                        <input type="file" class="form-control-file" id="exampleFormControlFile1" name="imgfile" onChange={imageHandler} />
                    </div>
                </form>
                <form>

                    <div class="row">
                        <button type="button" class="btn btn-primary" onClick={sign}>Signup</button>
                    </div>
                </form>
            </div>

        </div>
    );
}


export default Signup;