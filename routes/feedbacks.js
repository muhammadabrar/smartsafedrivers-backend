const router = require("express").Router();
let Feedback = require("../models/feedbacks");

//////////////////////////////////////
///////////Get All Feedback////////////////
router.route("/").get((req, res) => {
  Feedback.find()
    .then((Feedback) => res.json(Feedback))
    .catch((err) => res.status(400).json("Error: " + err));
});

//////////////////////////////////////
///////////post Feedback////////////////
router.route("/").post(async (req, res) => {
  const data = req.body;
  console.log(data);
  const addnewFeedback = new Feedback(data);
  await addnewFeedback
    .save()
    .then(() => res.json({ msg: true, data: addnewFeedback }))
    .catch((err) => res.status(400).json("Error: " + err));
});

//////////////////////////////////////
///////////get by id Feedback////////////////
router.route("/:id").get((req, res) => {
  Feedback.findById(req.params.id)
    .then((Feedback) => res.json(Feedback))
    .catch((err) => res.status(400).json("Error: " + err));
});

//////////////////////////////////////
///////////delete by id Feedback////////////////
router.route("/:id").delete((req, res) => {
  Feedback.findByIdAndDelete(req.params.id)
    .then(() => res.json("Feedback deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;