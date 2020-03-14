import React, { Component } from "react";
import API from "../../logic/API"
import "./task.css";


class Task extends Component {

    constructor(props) {
        super(props);
        this.state = {
            time: props.time,
            userEmail: props.userEmail,
            taskInput: props.taskInput,
            taskExtended: 0,
            taskDate: props.taskDate,
            tasks: props.tasks
        }


        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleSubmit = event => {
        if (event.key === 'Enter') {
            this.addTask(event);
        }
    }

    addTask = function (event) {

        event.preventDefault();

        let newTask = {
            newTask: {
                time: this.state.time,
                userEmail: this.state.userEmail,
                task: this.state.taskInput,
                taskExtended: 0,
                taskDate: this.state.taskDate
            }
        }


        if (newTask.newTask.task === "") {

            
            let    deleteObj=  {
                    time: newTask.newTask.time,
                    email: newTask.newTask.userEmail
                }
            

            console.log("deleting task: ", deleteObj);

            API.deleteTask(deleteObj).then((res) => {
                console.log("task deleted: ", res.data)
            });
        } else {
            console.log("newTask: ", newTask)
            API.addTask(newTask).then((res) => {
                console.log("task added: ", res.data)

            });
        }

    };

    render() {
        return (

            <div className="task" key={this.state.key}>
                <input
                    type="text"
                    name="taskInput"
                    className="taskInput"
                    onChange={this.handleInputChange}
                    onKeyUp={this.handleSubmit}
                    value={this.state.taskInput}
                    placeholder={this.state.taskInput}
                    autoComplete="off"
                />
                <button className="submitBtn" type="submit">Submit</button>
                <button className="extendBtn"><img className="extendIcon" src="https://www.thrivingparish.org/wp-content/uploads/2018/01/white-down-arrow-png-2-300x300.png" /></button>
            </div>

        )
    }
}


export default Task