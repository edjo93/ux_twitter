import React, { useState } from "react";
import { db } from "../config/fire"
import fire from "../config/fire";
import SearchUsers from "./SearchUsers";

const SearchField = () => {
    const [data, setData] = useState({
        search: "",
    });

    const [users, setUsers] = useState([]);

    let timer;

    const getUsers = async (value = data.search) => {
        fire.auth().onAuthStateChanged((user) => {
            if (user && value !== "") {
                db.collection("users").where("name", ">=", value).where("name", "<=", value + "\uf8ff").onSnapshot((querySnapshot) => {
                    const docs = [];
                    querySnapshot.forEach((doc) => {
                        docs.push({ ...doc.data(), id: doc.id });
                    });
                    setUsers(docs);
                });
            }
            else {

            }
        });

    };

    const handleChange = (e) => {
        clearTimeout(timer);
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
        timer = setTimeout(() => getUsers(value), 1000);
    }

    return (
        // <div style={{ display: 'flex', width: '16em', flexDirection: 'column' }}>
        <React.Fragment>
            <form class="form-inline my-6 my-lg-6">
                <div>
                    <input
                        autoComplete='off'
                        class="form-control mr-sm-2"
                        type="seach"
                        placeholder="Search"
                        aria-label="Search"
                        id="search"
                        name="search"
                        data-toggle='popover'
                        title='Test pop'
                        data-content='pepega'
                        onChange={handleChange}
                        value={data.search}
                    />
                </div>
            </form>
            {users.length !== 0 && <SearchUsers users={users} />}
        </React.Fragment>
        // </div>
    );
}

export default SearchField;