import React, { useState, useEffect } from "react";
import Day from "../components/Day/day";
import HourArray from "../HourArray.json";
import API from "../logic/API";
import Hour from "../components/Hour/hour";
import Task from "../components/Task/task";
import Agenda from "../components/Agenda/agenda";
import { useAuth0 } from "../contexts/auth0-context";
import moment from "moment";

function Home() {
    // access the context info with useAuth0()

    console.log('use auth 0', useAuth0())

    const user = useState(useAuth0().user);

    const hourArray = HourArray;

    const [tasks, setTasks] = useState({
        user_two: user,
        tasks: []
    })

    // const testTasks = [{time: 0, userEmail: "bob@bob.com", task: "task1", taskExtended: 0, taskDate: "01-01-2020"}, {time: 1, userEmail: "bob@bob.com", task: "task2", taskExtended: 0, taskDate: "01-01-2020"}]

    const userEmail = user[0].email;

    const currentDate = moment().format("YYYY-MM-DD");

    

    // You may need to declare addTask before initiating this state

    useEffect(() => {
        getTasks();
    }, [])

    const getTasks = () => {
        API.getTasks({ userEmail: { userEmail } })
            .then(res => {
                setTasks({tasks: res.data});
            })
            .catch((e) => console.log(e));
    };

    console.log('user', user)

    const whichTask = (hourID) => {

        let taskArray = tasks.tasks;

        console.log('taskArray: ', taskArray)

        for (let i = 0; i < taskArray.length; i++) {

            if (taskArray[i].time === hourID) {

                let task = taskArray[i].task;

                return task;

            } else {

                console.log('NO MATCH')
                return "";
            }
        }
        
    }

    const taskStyle = {
        color: "white",
        width: "100%",
        textAlign: "center",
        alignSelf: "stretch",
        marginTop: "-30px"
    }


    return (
        <div>
            <Day>
                <Agenda>
                    {hourArray.map((hour, i) => (
                        <div key={i}>
                            <Hour key={i} id={hour.time} hourName={hour.hourName}>
                                <Task
                                    key={i}
                                    taskInput={tasks.tasks.length}
                                    time={hour.time}
                                    userEmail={userEmail}
                                    taskExtended={0}
                                    taskDate={currentDate}
                                />
                                <p style={taskStyle}>{() => whichTask(hour.time)}</p>
                            </Hour>
                        </div>
                    ))
                    }
                  
                </Agenda>
            </Day>
            {/* onChange={e => setText(e.target.value)} */}
        </div>
    );
}



//     // constructor for storing local class variables:
//     constructor(props) {
//         super(props);
//         this.state = {
//             username: "",
//             hourArray: HourArray,
//             enter: this.addTask,
//             tasks: [],
//         };
//         console.log("useAuth0: " , useAuth0);
//         //this.taskID = React.createRef();
//     }



//     // get Tasks from mongoose database, if there are any to get.
//     // for each task, render it to the corresponding hour.



export default Home;