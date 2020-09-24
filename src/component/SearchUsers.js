import React, { useState } from 'react';
import SearchedUser from './SearchedUser';


const SearchUsers = (props) => {

    const [isOpen, setIsOpen] = useState(false);


    return (
        <div class="card bg-light" style={{marginTop: "6em"}}>
            <div class="card-body text-center">
                {props.users.map((user, index) => <SearchedUser key={`user-${index}`} name={user.name} tag={user.username} />)}

            </div>
        </div>

    );
}

export default SearchUsers;