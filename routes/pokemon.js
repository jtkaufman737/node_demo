const Router = require("express-promise-router");
const router = new Router()
const ObjectId = require("mongodb").ObjectId;

module.exports = router;

/*
Get all pokemon
*/

router.get("/", async(req, res) => {
  const client = req.app.mongo;

  await client.connect();

  const pokemon = await client.db("pokepic").collection("pokemon");

  pokemon.find({}).toArray((err, response) => {
    if(err) {
      res.send(err);
    }

    res.send(response);
  });
});

/*
Gets a specific pokemon by id
*/
router.get("/:id", async(req, res) => {
  const client = req.app.mongo;
  const id = req.params.id;

  await client.connect();

  // ObjectId is mongo parlance for formatting the id to match the PK field of the document
  const pokemon = await client.db("pokepic").collection("pokemon").find({ "_id": ObjectId(id) });

  pokemon.toArray((err, response) => {
    if(err) {
      res.send(err);
    }

    if(!response.length) {
      res.sendStatus(404);
    }

    res.send(response);
  });
});
