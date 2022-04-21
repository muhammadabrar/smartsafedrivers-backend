const router = require("express").Router();
let Queries = require("../models/Queries");

//////////////////////////////////////
///////////Get All Queries////////////////
router.route("/").get((req, res) => {
  Queries.find()
    .then((Queries) => res.json(Queries))
    .catch((err) => res.status(400).json("Error: " + err));
});

//////////////////////////////////////
///////////post Queries////////////////
router.route("/").post(async (req, res) => {
  const data = req.body;
  console.log(data);
  const addnewQueries = new Queries(data);
  await addnewQueries
    .save()
    .then(() => res.json({ msg: true, data: addnewQueries }))
    .catch((err) => res.status(400).json("Error: " + err));
});

//////////////////////////////////////
///////////get by id Queries////////////////
router.route("/:id").get((req, res) => {
  Queries.findById(req.params.id)
    .then((Queries) => res.json(Queries))
    .catch((err) => res.status(400).json("Error: " + err));
});

//////////////////////////////////////
///////////delete by id Queries////////////////
router.route("/:id").delete((req, res) => {
  Queries.findByIdAndDelete(req.params.id)
    .then(() => res.json("Queries deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});


module.exports = router;
