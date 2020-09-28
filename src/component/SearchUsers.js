import React, { useState } from 'react';
import SearchedUser from './SearchedUser';


const SearchUsers = (props) => (
    // <div style={{ marginTop: "6em" }}>
        <div >
            {props.users.map((user, index) => <SearchedUser key={`user-${index}`} name={user.name} tag={user.username} />)}
        </div>
    // </div>
);


export default SearchUsers;