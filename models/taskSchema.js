const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    home_id: {
      type: String,
      unique: true,
      trim: true,
      required: true,
    },
    room: {
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
      required: false,
    },
    taskStatus: {
      type: Boolean,
      required: true,
      default: false,
    },
    costEstimate: {
      type: Number,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;