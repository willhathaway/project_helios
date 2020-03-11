import React from "react";
import "./hour.css";
 
function Hour(props) {

    return (
        <div className="hour" id={props.time}>
            <h6 className="hourText">{props.hourName}</h6>
            <div>{props.children}</div>
        </div>
    )
}

export default Hour;