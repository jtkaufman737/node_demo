const Router = require("express-promise-router");
const router = new Router();
const ObjectId = require("mongodb").ObjectId;

module.exports = router;

/*
Get all pokemon
*/
router.get("/", async (req, res) => {
  const client = req.app.mongo;
  const dbName = client.s.dbName;
  const pokemon = await client.db(dbName).collection("pokemon");

  pokemon.find({}).toArray((err, response) => {
    if (err) {
      res.send(err);
    }

    res.send(response);
  });
});

/*
Gets a specific pokemon by id
*/
router.get("/:id", async (req, res) => {
  const client = req.app.mongo;
  const dbName = client.s.dbName;
  const id = req.params.id;

  // ObjectId is mongo parlance for formatting the id to match the PK field of the document
  const pokemon = await client
    .db(dbName)
    .collection("pokemon")
    .find({ _id: ObjectId(id) });

  pokemon.toArray((err, response) => {
    if (err) {
      res.send(err);
    }

    if (!response.length) {
      res.sendStatus(404);
    }

    res.send(response);
  });
});

/*
Adds new pokemon entry, uses following inputs

Name <String>
Image <String>
*/

router.post("/", async (req, res) => {
  const client = req.app.mongo;
  const dbName = client.s.dbName;

  try {
    const result = await client
      .db(dbName)
      .collection("pokemon")
      .insertOne(req.body);

    res.status(201).send(result.ops[0]);
  } catch (e) {
    res.send(e);
  }
});

/*
Updates pokemon entry with one or both optional values

Name <String>
Image <String>
*/

router.patch("/:id", async (req, res) => {
  const client = req.app.mongo;
  const dbName = client.s.dbName;

  try {
    const filter = { _id: ObjectId(req.params.id) };
    const update = {
      $set: req.body,
    };

    let result = await client
      .db(dbName)
      .collection("pokemon")
      .updateOne(filter, update);
    res.sendStatus(204);
  } catch (e) {
    res.send(e);
  }
});

/*
Deletes pokemon from collection by id
*/

router.delete("/:id", async (req, res) => {
  const client = req.app.mongo;
  const dbName = client.s.dbName;

  try {
    const filter = { _id: ObjectId(req.params.id) };
    await client.db(dbName).collection("pokemon").deleteOne(filter);
    res.sendStatus(204);
  } catch (e) {
    res.send(e);
  }
});
