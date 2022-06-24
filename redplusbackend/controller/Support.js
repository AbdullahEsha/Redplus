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
module.exports.storeSupportData = async (req, res) => {
  const { details } = req.body;
  const supportData = new Support({
    details,
  });
  supportData
    .save()
    .then((support) => {
      res.status(200).json({ support: "Successfully Added " + support });
    })
    .catch((err) => console.log(err));
};
