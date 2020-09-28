import React from "react"
const Alert = (props) => {
    
    return (
        <div class="alert alert-danger">
            {props.message}
        </div>
    )
}

export default Alert;