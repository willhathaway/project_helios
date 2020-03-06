const taskSchema = require("../models/task");

// Defining methods for the taskController
module.exports = {
  findAll: function(req, res) {
    taskSchema.find(req.query)
      .then(dbTask => res.json(dbTask))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    taskSchema.findById(req.params.id)
      .then(dbTask => res.json(dbTask))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    taskSchema.create(req.body)
      .then(dbTask => res.json(dbTask))
      .catch(err => res.status(422).json(err));
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