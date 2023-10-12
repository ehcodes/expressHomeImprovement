const User = require("../models/userSchema");

exports.getAllUsers = async function (req, res) {
  try {
    const users = await User.find();

    res.status(200).json({
      status: "success",
      results: users.length,
      data: {
        users,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
