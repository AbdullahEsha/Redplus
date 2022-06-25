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
  const { details, user_id } = req.body;
  const supportData = new Support({
    details,
    user_id,
  });
  supportData
    .save()
    .then((response) => {
      res.status(200).json({ response: response });
    })
    .catch((err) => console.log(err));
};
