import React from "react";
import { useHistory } from "react-router-dom";

const SearchedUser = (props) => {
    const history = useHistory();

    return (
        <div class="row">
            <div style={{ color: "#000" }} onClick={() => history.push(`/${props.tag}`)} >
                <div class="col-sm-6">
                    <img src={props.profilepic} alt="" id="img" className="img img-tweet" />
                </div>
                <div class="col-sm-6">
                    <b>{props.name}</b>
                    <h6>@{props.tag}</h6>
                </div>
            </div>
        </div>
    );
}

export default SearchedUser;