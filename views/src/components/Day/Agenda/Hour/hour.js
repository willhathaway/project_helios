import React from "react";
import "./hour.css";


function Hour(props) {

    return (
        <div className="hour">
           <h6 className="hourText">{props.hourName}</h6>
        </div>
    )
}

export default Hour;