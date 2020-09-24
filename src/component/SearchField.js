import React, { useState } from "react";
import { db } from "../config/fire"
import fire from "../config/fire";
import SearchUsers from "./SearchUsers";

const SearchField = () => {
    const [data, setData] = useState({
        search: "",
    });

    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        fire.auth().onAuthStateChanged((user) => {
            if (user && data.search !== "" && data.search.length > 3) {
                db.collection("users").where("name", ">=", data.search).where("name", "<=", data.search + "\uf8ff").onSnapshot((querySnapshot) => {
                    const docs = [];
                    querySnapshot.forEach((doc) => {
                        docs.push({ ...doc.data(), id: doc.id });
                    });
                    setUsers(docs);
                    console.log(docs);
                });
            }
            else {

            }
        });

    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
        getUsers();
    }

    return (
        <React.Fragment>
            <form class="form-inline my-6 my-lg-6">
                <input class="form-control mr-sm-12" type="text" placeholder="Search" aria-label="Search" id="search" name="search" onChange={handleChange} value={data.search} />
            </form>
            <SearchUsers users={users}/>
        </React.Fragment>
    );
}

export default SearchField;