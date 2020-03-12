const taskSchema = require("../models/task");

// Defining methods for the taskController
module.exports = {
  find: function(req, res) {
      console.log("findAll() req.params: ", req.params);
    taskSchema.find(req.params)
      .then(dbTask => res.json(dbTask))
      .catch(err => res.json(err));
  },
  findById: function(req, res) {
    taskSchema.findById(req.params.id)
      .then(dbTask => res.json(dbTask))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
      console.log("createTask function hitting in taskController");
      console.log("req.body: ", req.body)
      // if a task already exists in this time slot, delete it and replace it
    taskSchema.create(req.body.newTask)
      .then(dbTask => res.json(dbTask))
      .catch(err => res.json(err));
  },
  update: function(req, res) {
    taskSchema.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbTask => res.json(dbTask))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    taskSchema.findById(req.params.id)
      .then(dbTask => dbTask.remove())
      .then(dbTask => res.json(dbTask))
      .catch(err => res.status(422).json(err));
  }
};