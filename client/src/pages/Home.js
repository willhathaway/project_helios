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

    const user = useAuth0().user;

    const hourArray = HourArray;

    const [tasks, setTasks] = useState({
        userObj: user,
        tasks: [],
        loaded: false
    })

    const userEmail = tasks.userObj.email;

    const currentDate = moment().format("YYYY-MM-DD");

    useEffect(() => {
        getTasks();
    }, [])

    const getTasks = () => {
        API.getTasks(userEmail)
            .then(res => {
                setTasks({ ...tasks, tasks: res.data , loaded:true})

            })
            .catch((e) => console.log(e));
    };

    console.log(tasks.tasks)

    const whichTask = (hourID) => {

        return tasks.tasks.find((t) => t.time === hourID) ? tasks.tasks.find((t) => t.time === hourID).task : '';

    }

    const deleteTasks = function () {

        // API.deleteTask
        console.log("deleting all")

    }

    return (
        <div>
            <Day>
                <Agenda>
                    {tasks.loaded === true ? (
                        hourArray.map((hour, i) => {
                            return (
                                <div key={i}>
                                    <Hour key={i} id={hour.time} hourName={hour.hourName}>
                                        <Task
                                            key={i}
                                            taskInput={whichTask(hour.time)}
                                            time={hour.time}
                                            userEmail={userEmail}
                                            taskExtended={0}
                                            taskDate={currentDate}
                                        />
                                    </Hour>
                                </div>
                            )
                        })

                    ) : (
                            <p>tasks are loading</p>
                        )}

                </Agenda>
                <button onClick={deleteTasks}></button>
            </Day>
        </div>
    );
}


export default Home;