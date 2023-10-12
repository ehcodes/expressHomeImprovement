// external imports
const express = require("express");
const cors = require("cors");
const methodOverride = require("method-override");

// internal imports
const userAuthRouter = require("./routes/userAuthRt");
const homeRouter = require("./routes/homeRt");
const indexRouter = require("./routes/indexRt");
const userProfileRouter = require("./routes/userProfileRt");

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static("public"));
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
  next();
});

app.use("/", indexRouter);
app.use("/api/v1/authentication", userAuthRouter);
app.use("/api/v1/users", userProfileRouter);
app.use("/api/v1/homes", homeRouter);


module.exports = app;
