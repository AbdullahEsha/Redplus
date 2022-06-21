const Pathology = require("../models/Pathology");

module.exports.getPathologyData = (req, res) => {
  Pathology.find()
    .then((pathology) => {
      res.status(200).json({ pathology: pathology });
    })
    .catch((err) => {
      res.status(422).json({ error: err });
    });
};
