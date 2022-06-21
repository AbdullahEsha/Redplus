const Support = require("../models/Support");

module.exports.getSupportData = (req, res) => {
  Support.find()
    .then((support) => {
      res.status(200).json({ support: support });
    })
    .catch((err) => {
      res.status(422).json({ error: err });
    });
};
