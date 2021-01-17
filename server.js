const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const port = 3000;
const db = require("./db");
const routes = require("./routes");

// Create app instance
const app = express();

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cors());

// mounts routes to app
routes(app);

// run app, bind db to app instance
app.listen(port, async() => {
  console.log("server running on port 3000");
  app.mongo = db;
  await app.mongo.connect();
});

// allows the tests to import the app instance
module.exports = app;
