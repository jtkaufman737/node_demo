require("dotenv").config();

const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

// queues up test db for integration tests if not run in prod mode
const envVar =
  process.env.NODE_ENV == "production" ? "MONGO_URI" : "MONGO_URI_TEST";
const uri = process.env[envVar];

// creates mongo client to be bound to express app instance
const mongoClient = new MongoClient(
  uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, db) => {
    db.close();
    throw err;
  }
);

module.exports = mongoClient;
