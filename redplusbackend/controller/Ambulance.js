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
