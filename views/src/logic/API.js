import axios from "axios";

export default {
    // Gets all saved tasks
    getTasks: function () {
        return axios.get("/api/tasks");
    },
    // Deletes the saved task with the given id
    deleteTask: function (id) {
        return axios.delete("/api/tasks/" + id);
    },
    // Add a task to the DB:
    addTask: function (taskData) {
        return axios.post("/api/tasks", taskData)
    },
    handleLogin: function (userData) {
        console.log(userData)
        return axios.post("api/login", userData)
    }

};