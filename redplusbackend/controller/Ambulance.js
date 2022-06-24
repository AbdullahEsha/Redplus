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
    .then((ambulance) => {
      res.status(200).json({ ambulance: "Successfully Added " + ambulance });
    })
    .catch((err) => console.log(err));
};
