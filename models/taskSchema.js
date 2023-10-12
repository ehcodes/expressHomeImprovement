const mongoose = require("mongoose");

// required fields
// home_id
// bathroom1
// kitchen

const homeSchema = new mongoose.Schema(
  {
    // each user will only have access to one home, so the user ID associated to each home may be unique
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

const Home = mongoose.model("Home", homeSchema);

module.exports = Home;