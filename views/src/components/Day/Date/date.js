import React from "react";
import "./date.css";
import Moment from "moment";


function Date(props) {
    return (
        <div className="date">{Moment().format("dddd" + " ~ " + " MMMM D YYYY").toUpperCase()}</div>
    )
}

export default Date;