const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const port = 3000;
const db = require('./db');
const mongodb = db(process.argv[2]);
const routes = require('./routes');

// Create app instance
const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

// sets db as application wide value
app.mongo = mongodb;

// mounts routes to app
routes(app);

// serves app on port 3000
app.listen(port, () => {
  console.log('server running on port 3000')
});
