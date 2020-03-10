import React, { Component } from "react";
import API from "../../logic/API"
import "./task.css";


class Task extends Component {

    constructor(props) {
        super(props);
        this.state = {
            time: props.time,
            userEmail: props.userEmail,
            taskInput: "",
            taskExtended: 0,
            taskDate: props.taskDate,
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }


    handleInputChange = event => {
        console.log('hitting', event)
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleSubmit = event => {
        if (event.key === 'Enter') {
            console.log("enter")
            this.addTask(event);
        }
    }


    addTask = function (event) {
        event.preventDefault();
        console.log('addTask function hitting');

        let newTask = {
            newTask: {
                time: this.state.time,
                userEmail: this.state.userEmail,
                task: this.state.taskInput,
                taskExtended: 0,
                taskDate: this.state.taskDate
            }
        }

        console.log("newTask: ", newTask)

        API.addTask(newTask).then((res) => console.log("task added: ", res.data)); // this.getTasks()

    };

    render() {
        return (

            <div className="task" key={this.state.key}>
                <input
                    type="text"
                    name="taskInput"
                    taskName={this.state.taskName}
                    className="taskInput"
                    onChange={this.handleInputChange}
                    onKeyUp={this.handleSubmit}
                    value={this.state.taskInput}
                />
                <button type="submit">Submit</button>
                
            </div>

        )
    }
}


export default Task