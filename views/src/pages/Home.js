import React, { Component } from "react";
import Day from "../components/Day/day";
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
        // Get 
        const newTask = this.state.tasks.find(task => task.id === id);

        this.setState(prevState => {
            tasks: prevState.concat(event.target.value)
        })

    
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