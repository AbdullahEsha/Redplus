const Ambulance = require("../models/Ambulance");

module.exports.getAmbulanceData = (req, res) => {
  console.log("data");
  Ambulance.find()
    .then((ambulance) => {
      console.log("data", ambulance);
      res.status(200).json({ ambulance: ambulance });
    })
    .catch((err) => {
      res.status(422).json({ error: err });
    });
};
