const taskSchema = require("../models/task");

// Defining methods for the taskController
module.exports = {
    findAll: function (req, res) {
        console.log("findAll() req.params: ", req.params);
        taskSchema.find({
                userEmail: req.params.email
            })
            .then(dbTask => res.json(dbTask))
            .catch(err => res.json(err));
    },
    findById: function (req, res) {
        console.log("findAll() req.params: ", req.params);
        taskSchema.find({
                userEmail: req.params.email
            })
            .then(dbTask => res.json(dbTask))
            .catch(err => res.json(err));
    },
    create: function (req, res) {
        console.log("createTask function hitting in taskController");
        console.log("req.body: ", req.body)
        // if a task already exists in this time slot, delete it and replace it:

        // find one and update in database. search for the task by time.

        let newTask = req.body.newTask;

        taskSchema.findOneAndReplace({
                time: req.body.newTask.time
            }, newTask, {
                new: true,
                upsert: true
            })
            .then(dbTask => res.json(dbTask))
            .catch(err => res.json(err));

    },
    remove: function (req, res) {
        console.log("delete task. req.params: ", req.body)
        let time = req.body.time;
        let email = req.body.email
        taskSchema.findOne({
                time: time,
                userEmail: email
            })
            .then(dbTask => dbTask.delete())
            .then(dbTask => res.json(dbTask))
            .catch(err => res.json(err));
    },
    removeAll: function (req, res) {
        taskSchema.deleteMany({}).then(dbTask => res.json(dbTask))
    }
};