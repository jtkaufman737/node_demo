require('mongodb');

const MongoClient = mongodb.MongoClient;
const ui = process.env.MONGO_URI;

// Create new mongo connector instance
const mongoClient = new MongoClient(uri, {
  reconnectTries: Number.MAX_VALUE,
  autoreconnect: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongo.exports = mongoClient;
