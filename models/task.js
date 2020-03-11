  const mongoose = require("mongoose");
  const Schema = mongoose.Schema;

  const taskSchema = new Schema({

      time: {
          type: Number,
          required: true
      },
      userEmail: {
          type: String,
          required: true
      },
      task: {
          type: String,
          required: true
      },
      taskExtended: {
          type: Number,
          required: true
      },
      taskDate: {
          type: String,
          required: true
      }
  });

  const TaskModel = mongoose.model("Task", taskSchema);

  module.exports = TaskModel;