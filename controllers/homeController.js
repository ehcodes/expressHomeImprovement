const Home = require("../models/homeSchema");

exports.getAllHomes = async function (req, res) {
  try {
    const homes = await Home.find();

    res.status(200).json({
      status: "success",
      results: homes.length,
      data: {
        homes,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
