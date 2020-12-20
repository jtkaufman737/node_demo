const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const port = 3000;
const db = require('db');
const routes = require('routes');

// Create app instance
const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

// mounts routes to app
routes(app);

// serves app
app.listen(port);
