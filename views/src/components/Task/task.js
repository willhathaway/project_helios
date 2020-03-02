import React from "react";
import "./task.css";


function Task(props) {

    return (
        <div className="task">
            <form className="taskInputForm" onSubmit={props.enter}>
                <input className="taskInput"></input>
            </form>
            
            <button className="checklistBtn">{props.btnName}</button>
            <button className="noteBtn">{props.btnName}</button>
            <button className="extendBtn">{props.btnName}</button>

        </div>
    )
}

export default Task