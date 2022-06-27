const { response } = require("../app");
const Ambulance = require("../models/Ambulance");

module.exports.getAmbulanceData = (req, res) => {
  Ambulance.find()
    .then((ambulance) => {
      res.status(200).json({ ambulance: ambulance });
    })
    .catch((err) => {
      res.status(422).json({ error: err });
    });
};

module.exports.storeAmbulanceData = async (req, res) => {
  const { ambulanceDetails, img, cost, driver_nid, is_avaiable } = req.body;
  const ambulanceData = new Ambulance({
    ambulanceDetails,
    img,
    cost,
    driver_nid,
    is_avaiable,
  });
  ambulanceData
    .save()
    .then((response) => {
      res.status(200).json({ response: response });
    })
    .catch((err) => console.log(err));
};
module.exports.destroyAmbulanceData = (req, res) => {
  const { id } = req.params;
  Bio.findByIdAndDelete({ _id: id })
    .then(() => res.status(200).json({ msg: "Deleted Succesfully" }))
    .catch((error) => res.status(422).json({ error: error }));
};
module.exports.getEditAmbulanceData = async (req, res) => {
  const { id } = req.params;
  try {
    const ambulance = await Ambulance.findOne({ _id: id });
    res.status(200).json({ ambulance: ambulance });
  } catch (error) {
    res.status(400).json({ error: "error" });
  }
};
module.exports.postEditAmbulanceData = (req, res) => {
  const { id } = req.params;
  Ambulance.findOneAndUpdate(
    { _id: id },
    {
      $set: {
        ambulanceDetails: req.body.ambulanceDetails,
        img: req.body.img,
        cost: req.body.cost,
        driver_nid: req.body.driver_nid,
        is_avaiable: req.body.is_avaiable,
      },
    },
    { new: true },
    (err, response) => {
      if (err) {
        res.status(422).json({ error: err });
      }
      res.status(200).json({ response: response });
    }
  ).catch((err) => console.log("err", err));
};
