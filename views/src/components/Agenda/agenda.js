import React from "react";
import "./agenda.css";


function Agenda(props) {

    return (
        <div className="agenda">{props.children}</div>
    )
}

export default Agenda;