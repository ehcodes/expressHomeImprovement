const mongoose = require("mongoose");

const homeSchema = new mongoose.Schema(
  {
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
      required: true,
      default: 'Not Added'
    },
    bedroom2: {
      type: String,
      trim: true,
      uppercase: true,
      required: true,
      default: 'Not Added'
    },
    bedroom3: {
      type: String,
      trim: true,
      uppercase: true,
      required: true,
      default: 'Not Added'
    },
    bedroom4: {
      type: String,
      trim: true,
      uppercase: true,
      required: true,
      default: 'Not Added'
    },
    bedroom5: {
      type: String,
      trim: true,
      uppercase: true,
      required: true,
      default: 'Not Added'
    },
    bedroom6: {
      type: String,
      trim: true,
      uppercase: true,
      required: true,
      default: 'Not Added'
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
      required: true,
      default: 'Not Added'
    },
    bathroom3: {
      type: String,
      trim: true,
      uppercase: true,
      required: true,
      default: 'Not Added'
    },
    kitchen: {
      type: String,
      trim: true,
      uppercase: true,
      required: true,
      default: 'Not Added'
    },
    dining: {
      type: String,
      trim: true,
      uppercase: true,
      required: true,
      default: 'Not Added'
    },
    living: {
      type: String,
      trim: true,
      uppercase: true,
      required: true,
      default: 'Not Added'
    },
    basement: {
      type: String,
      trim: true,
      uppercase: true,
      required: true,
      default: 'Not Added'
    },
    attic: {
      type: String,
      trim: true,
      uppercase: true,
      required: true,
      default: 'Not Added'
    },
    roof: {
      type: String,
      trim: true,
      uppercase: true,
      required: true,
      default: 'Not Added'
    },
  },
  {
    timestamps: true,
  }
);

const Home = mongoose.model("Home", homeSchema);

module.exports = Home;