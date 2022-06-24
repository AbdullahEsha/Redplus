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
module.exports.storePathologyData = async (req, res) => {
  const { package, price, details, is_avaiable } = req.body;
  const pathologyData = new Pathology({
    package,
    price,
    details,
    is_avaiable,
  });
  pathologyData
    .save()
    .then((pathology) => {
      res.status(200).json({ pathology: "Successfully Added " + pathology });
    })
    .catch((err) => console.log(err));
};
