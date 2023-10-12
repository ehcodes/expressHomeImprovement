const mongoose = require("mongoose");
const Task = require("./taskSchema");

const homeSchema = new mongoose.Schema(
  {
    bedroom1: {
      type: String,
      trim: true,
      uppercase: true,
      required: true,
      default: "bedroom 1",
    },
    bedroom2: {
      type: String,
      trim: true,
      uppercase: true,
      required: true,
      default: undefined,
    },
    bedroom3: {
      type: String,
      trim: true,
      uppercase: true,
      required: true,
      default: undefined,
    },
    bathroom1: {
      type: String,
      trim: true,
      uppercase: true,
      required: true,
      default: "bathroom",
    },
    bathroom2: {
      type: String,
      trim: true,
      uppercase: true,
      required: true,
      default: undefined,
    },
    bathroom3: {
      type: String,
      trim: true,
      uppercase: true,
      required: true,
      default: undefined,
    },
    kitchen: {
      type: String,
      trim: true,
      uppercase: true,
      required: true,
      default: "kitchen",
    },
    dining: {
      type: String,
      trim: true,
      uppercase: true,
      required: true,
      default: undefined,
    },
    living: {
      type: String,
      trim: true,
      uppercase: true,
      required: true,
      default: undefined,
    },
    basement: {
      type: String,
      trim: true,
      uppercase: true,
      required: true,
      default: undefined,
    },
    attic: {
      type: String,
      trim: true,
      uppercase: true,
      required: true,
      default: undefined,
    },
    roof: {
      type: String,
      trim: true,
      uppercase: true,
      required: true,
      default: undefined,
    },
    tasks: {
      type: [Task],
      default: undefined,
    },
  },
  {
    timestamps: true,
  }
);

const Home = mongoose.model("Home", homeSchema);

module.exports = Home;
