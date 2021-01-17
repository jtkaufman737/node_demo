const Router = require("express-promise-router");
const router = new Router();
const ObjectId = require("mongodb").ObjectId;

module.exports = router;

/*
Get all equipment
*/
router.get("/", async (req, res) => {
  // access db, and database name (test vs prod)
  const client = req.app.mongo;
  const dbName = client.s.dbName;
  // grab equipment collection
  const equipment = await client.db(dbName).collection("equipment");

  equipment.find({}).toArray((err, response) => {
    if (err) {
      res.send(err);
    }

    res.send(response);
  });
});

/*
Get single piece of equipment
*/
router.get("/:id", async(req, res) => {
  const client = req.app.mongo;
  const dbName = client.s.dbName;
  const id = req.params.id;

  const equipment = await client
    .db(dbName)
    .collection("equipment")
    .findOne({
       _id: ObjectId(id)
     }).then((response) => {
       res.send(response);
     }).catch((err) => {
       res.send(err);
     });
});

/*
Create new equipment entry
*/
router.post("/", async(req, res) => {
  const client = req.app.mongo;
  const dbName = client.s.dbName;

  try {
    const result = await client
      .db(dbName)
      .collection("equipment")
      .insertOne(req.body);

    res.status(201).send(result.ops[0]);
  } catch(e) {
    res.send(e);
  }
});

/*
Delete equipment item from collection by id
*/
router.delete("/:id", async(req, res) => {
  const client = req.app.mongo;
  const dbName = client.s.dbName;

  try {
    const filter = { _id: ObjectId(req.params.id) };
    await client.db(dbName).collection("equipment").deleteOne(filter);
    res.sendStatus(204);
  } catch(e) {
    console.log("ERROR IN DELETE ENDPOINT")
    console.log(e)
    res.send(e);
  }
});
