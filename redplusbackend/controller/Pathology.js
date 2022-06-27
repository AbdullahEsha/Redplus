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
    .then((response) => {
      res.status(200).json({ response: response });
    })
    .catch((err) => console.log(err));
};
module.exports.getEditPathologytData = async (req, res) => {
  const { id } = req.params;
  try {
    const pathology = await Pathology.findOne({ _id: id });
    res.status(200).json({ pathology: pathology });
  } catch (error) {
    res.status(400).json({ error: "error" });
  }
};
module.exports.postEditPathologyData = (req, res) => {
  const { id } = req.params;
  Pathology.findOneAndUpdate(
    { _id: id },
    {
      $set: {
        specialist_at: req.body.specialist_at,
        schedule: req.body.schedule,
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
