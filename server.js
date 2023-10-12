const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({
  path: `${__dirname}/.env`,
});

const app = require("./app");

const port = process.env.PORT;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

app.listen(port, () => {
  console.log(Date());
  console.log(`listening on port ${port}`);
  console.log(`http://localhost:${port}/`);
});
