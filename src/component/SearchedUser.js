import React from "react";

const SearchedUser = (props) => {


    return (
        <div class="row">
            <div style={{ color: "#000" }}>
                {props.name}
                {props.tag}
            </div>
        </div>
    );
}

export default SearchedUser;