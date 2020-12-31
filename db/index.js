require('dotenv').config();

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

/*
This function wraps the mongo client constructor so that a command line
arg for db (test or prod) can be passed by npm start scripts
*/

const mongoClient = (uri) => {
  uri = process.env[uri];

  return new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
  });
}

module.exports = mongoClient;
