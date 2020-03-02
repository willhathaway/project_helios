  const mongoose = require("mongoose");
  const Schema = mongoose.Schema;

  const taskSchema = new Schema({

      id: {
          type: Number,
          required: true
      },
      userName: {
          type: String,
          required: true
      },
      taskName: {
          type: String,
          required: true
      },
      taskChecklist: {
          type: [String]
      },
      taskNotes: {
          type: [String]
      },
      taskExtended: {
          type: Number,
          required: true
      },
      taskDate: {
          type: Date,
          required: true
      }
  });

  const TaskModel = mongoose.model("Task", taskSchema);

  module.exports = TaskModel;