const Task = require("../models/taskSchema");

const getAllTasks = async function (req, res) {
  try {
    const tasks = await Task.find();

    res.status(200).json({
      status: "success",
      results: tasks.length,
      data: {
        tasks,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { taskRoutes: router };