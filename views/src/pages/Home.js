import React, { Component } from "react";
import Day from "../components/Day/day";
import Header from "../components/Header/header";
import HourArray from "../HourArray.json";
import API from "../logic/API";
import Hour from "../components/Hour/hour";
import Task from "../components/Task/task";
import Agenda from "../components/Agenda/agenda";

class Home extends Component {

    // constructor for storing local class variables:
    constructor(props) {
        super(props);
        this.state = {
            username: "Will",
            hourArray: HourArray,
            enter: this.addTask,
            tasks: [],
        };
        this.taskID = React.createRef();
    }

    componentDidMount() {
        this.getTasks();
    }

    getTasks = () => {
        API.getTasks()
            .then(res =>
                this.setState({
                    tasks: res.data
                })
            )
            .catch(() =>
                this.setState({
                    tasks: []
                })
            );
    };


    addTask = (event, id) => {
        event.preventDefault();
        console.log('addTask function hitting');
        // create an object for the new Task, using the hourID of it's parent hour, the username, the task name, etc.,
        // and push it to this.state.tasks:

        // const newTask = {
        //     id: 
        // }

        this.setState({
            tasks: [...newTask]
        })
        const newTask = this.state.tasks.find(task => task.id === id);
        console.log(newTask)
        API.saveTask({
            id: newTask.id,
            userName: newTask.userName,
            taskName: newTask.taskName,
            taskChecklist: newTask.taskChecklist,
            taskNotes: newTask.taskNotes,
            taskExtended: newTask.taskExtended,
            taskDate: newTask.taskDate
        }).then(() => this.getTasks());
    };

    // get Tasks from mongoose database, if there are any to get.
    // for each task, render it to the corresponding hour.

    render() {
        return (
            <div>
            <Header username={this.state.username} />
                <Day>
                    <Agenda>
                        {this.state.hourArray.map(hour => (
                            <div key={hour.id}>
                                <Hour id={hour.id} hourName={hour.hourName} >
                                    <Task id={hour.id} enter={this.state.enter} ref={this.id} />
                                </Hour>
                            </div>
                        ))
                        }
                    </Agenda>
                </Day>
                </div>
        );
    }
}

export default Home;