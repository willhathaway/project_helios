const dbTaskModel = require("../models/task");

// Defining methods for the taskController
module.exports = {
  findAll: function(req, res) {
    dbTaskModel.find(req.query)
      .then(dbTask => res.json(dbTask))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    dbTaskModel.findById(req.params.id)
      .then(dbTask => res.json(dbTask))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    dbTaskModel.create(req.body)
      .then(dbTask => res.json(dbTask))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    dbTaskModel.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbTask => res.json(dbTask))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    dbTaskModel.findById(req.params.id)
      .then(dbTask => dbTask.remove())
      .then(dbTask => res.json(dbTask))
      .catch(err => res.status(422).json(err));
  }
};