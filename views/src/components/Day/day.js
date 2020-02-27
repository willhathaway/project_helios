import React from "react";
import "./day.css";
import Agenda from "./Agenda/agenda";
import Date from "./Date/date";

function Day(props) {

    return (

        <div className="day">

            <Date date={props.date} />

            <div></div>

            <Agenda hourArray={props.hourArray} />

        </div>

    )
}

export default Day;