import React from "react";
import "./day.css";
import Moment from "moment";


function Day(props) {

    return (

        <div className="day">

            <div className="date">{Moment().format("dddd" + " ~ " + " MMMM D YYYY").toUpperCase()}</div>

            <div>{props.children}</div>

        </div>

    )
}

export default Day;