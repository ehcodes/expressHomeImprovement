const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    area: {
      type: String,
      trim: true,
      uppercase: true,
      required: true,
    },
    taskName: {
      type: String,
      trim: true,
      uppercase: true,
      required: true,
    },
    taskDescription: {
      type: String,
      trim: true,
      uppercase: true,
      required: true,
      default: null,
    },
    taskStatus: {
      type: Boolean,
      required: true,
      default: false,
    },
    costEstimate: {
      type: Number,
      required: true,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;