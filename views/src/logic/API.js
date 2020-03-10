import axios from "axios";

export default {
    // Gets all saved tasks
    getTasks: function (userEmail) {
        return axios.get("/api/tasks", {params: {userEmail: userEmail}});
    },
    // Deletes the saved task with the given id
    deleteTask: function (id) {
        return axios.delete("/api/tasks/" + id);
    },
    // Add a task to the DB:
    addTask: function (taskData) {
        console.log("addTask() in API.js hitting: ", taskData);
        return axios.post("/api/tasks", taskData)
    },
    handleLogin: function (userData) {
        console.log(userData)
        return axios.post("api/login", userData)
    }

};