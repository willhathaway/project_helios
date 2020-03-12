import React from "react";
import "./hour.css";
import moment from "moment";
 
function Hour(props) {

    let now = {color: "whitesmoke"};

    if ((props.id.toString()) === moment().format("H")) {
        now = {color: "red"}
    }

    return (
        <div className="hour" id={props.time}>
            <h6 className="hourText" style={now}>{props.hourName}</h6>
            <div>{props.children}</div>
        </div>
    )
}

export default Hour;