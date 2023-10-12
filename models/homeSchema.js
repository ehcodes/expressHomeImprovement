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
      unique:true,
      trim: true,
      required: true,
    },
    bedroom1: {
      type: String,
      trim: true,
      uppercase: true,
      required: false,
    },
    bedroom2: {
      type: String,
      trim: true,
      uppercase: true,
      required: false,
    },
    bedroom3: {
      type: String,
      trim: true,
      uppercase: true,
      required: false,
    },
    bedroom4: {
      type: String,
      trim: true,
      uppercase: true,
      required: false,
    },
    bedroom5: {
      type: String,
      trim: true,
      uppercase: true,
      required: false,
    },
    bedroom6: {
      type: String,
      trim: true,
      uppercase: true,
      required: false,
    },
    bathroom1: {
      type: String,
      trim: true,
      uppercase: true,
      required: true,
    },
    bathroom2: {
      type: String,
      trim: true,
      uppercase: true,
      required: false,
    },
    bathroom3: {
      type: String,
      trim: true,
      uppercase: true,
      required: false,
    },
    kitchen: {
      type: String,
      trim: true,
      uppercase: true,
      required: true,
    },
    dining: {
      type: String,
      trim: true,
      uppercase: true,
      required: false,
    },
    living: {
      type: String,
      trim: true,
      uppercase: true,
      required: false,
    },
    basement: {
      type: String,
      trim: true,
      uppercase: true,
      required: false,
    },
    attic: {
      type: String,
      trim: true,
      uppercase: true,
      required: false,
    },
    roof: {
      type: String,
      trim: true,
      uppercase: true,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Home = mongoose.model("Home", homeSchema);

module.exports = Home;