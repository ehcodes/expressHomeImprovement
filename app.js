// external imports
const express = require("express");
const methodOverride = require("method-override");

// internal imports
const homeRouter = require("./routes/homeRoute");

const app = express();

app.use(express.json());

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
  next();
});

app.use("/", indexRouter);
app.use("/api/homes", homeRouter);


module.exports = app;
