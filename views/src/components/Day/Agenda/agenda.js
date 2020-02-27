import React from "react";
import "./agenda.css";
import Hour from "./Hour/hour";


function Agenda(props) {

    return (
        <div className="agenda">
           {props.hourArray.map(hour => (
               <Hour
                id={hour.id}
                hourName={hour.hourName}
                />
           ))
}
        </div>
    )
}

export default Agenda;