const router = require("express").Router();
let Orders = require("../models/orders");

//////////////////////////////////////
///////////Get All Orders////////////////
router.route("/").get((req, res) => {
  Orders.find()
    .then((Orders) => res.json(Orders))
    .catch((err) => res.status(400).json("Error: " + err));
});

//////////////////////////////////////
///////////post Orders////////////////
router.route("/").post(async (req, res) => {
  const data = req.body;
  console.log(data);
  const addnewOrders = new Orders(data);
  await addnewOrders
    .save()
    .then(() => res.json({ msg: true, data: addnewOrders }))
    .catch((err) => res.status(400).json("Error: " + err));
});

//////////////////////////////////////
///////////get by id Orders////////////////
router.route("/:id").get((req, res) => {
  Orders.findById(req.params.id)
    .then((Orders) => res.json(Orders))
    .catch((err) => res.status(400).json("Error: " + err));
});

//////////////////////////////////////
///////////delete by id Orders////////////////
router.route("/:id").delete((req, res) => {
  Orders.findByIdAndDelete(req.params.id)
    .then(() => res.json("Orders deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

//////////////////////////////////////
///////////update by id Orders////////////////

// router.route("/:id").put((req, res) => {
//   const data = req.body;

//   Orders.findById(req.params.id)
//     .then((Orders) => {
//       Orders.grade = data.grade;
//       Orders.Orders = data.Orders;

//       Orders.save()
//         .then(() => res.json("Orders updated!"))
//         .catch((err) => res.status(400).json("Error: " + err));
//     })
//     .catch((err) => res.status(400).json("Error: " + err));
// });

//////////////////////////////////////
///////////update by id Orders////////////////

router.route("/:id").put(async (req, res) => {
  const data = req.body;
  console.log(data);
  try {
    const update = await Orders.updateOne(
      { _id: req.params.id },
      { $set: data }
    );

    res.json({ msg: "Orders updated!" });
  } catch (error) {
    res.status(400).json("Error: " + error);
  }
});
module.exports = router;
