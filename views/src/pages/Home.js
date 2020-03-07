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

    const [tasks, setTasks] = useState([])

    // const testTasks = [{time: 0, userEmail: "bob@bob.com", task: "task1", taskExtended: 0, taskDate: "01-01-2020"}, {time: 1, userEmail: "bob@bob.com", task: "task2", taskExtended: 0, taskDate: "01-01-2020"}]

    const userEmail = user[0].email;

    const currentDate = moment().format("YYYY-MM-DD");

    console.log(currentDate)

    // You may need to declare addTask before initiating this state

    useEffect(() => {
        getTasks();
    }, [])
    
    const getTasks = () => {
        API.getTasks()
            .then(res => {
                setTasks(res.data)
            })
            .catch((e) => console.log(e));
    };

    console.log('user', user)

    return (
        <div>
            <Day>
                <Agenda>
                    {hourArray.map((hour, i) => (
                        <div key={i}>
                            <Hour key={i} id={hour.time} hourName={hour.hourName}>
                                <Task
                                    key={i}
                                    time={hour.time}
                                    userEmail={userEmail}
                                    taskName={""}
                                    taskExtended={0}
                                    taskDate={currentDate}
                                  />
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