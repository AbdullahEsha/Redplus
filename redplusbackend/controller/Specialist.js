const Specialist = require("../models/Specialist");

module.exports.getSpecialistData = (req, res) => {
  Specialist.find()
    .then((specialist) => {
      res.status(200).json({ specialist: specialist });
    })
    .catch((err) => {
      res.status(422).json({ error: err });
    });
};
