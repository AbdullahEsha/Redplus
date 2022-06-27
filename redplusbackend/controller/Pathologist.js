const Pathologist = require("../models/Pathologist");

module.exports.getPathologistData = (req, res) => {
  Pathologist.find()
    .then((pathologist) => {
      res.status(200).json({ pathologist: pathologist });
    })
    .catch((err) => {
      res.status(422).json({ error: err });
    });
};
module.exports.storePathologistData = async (req, res) => {
  const { user_id, specialist_at, schedule, is_avaiable } = req.body;
  const pathologistData = new Pathologist({
    user_id,
    specialist_at,
    schedule,
    is_avaiable,
  });
  pathologistData
    .save()
    .then((response) => {
      res.status(200).json({ response: response });
    })
    .catch((err) => console.log(err));
};
module.exports.destroyPathologistData = (req, res) => {
  const { id } = req.params;
  Bio.findByIdAndDelete({ _id: id })
    .then(() => res.status(200).json({ msg: "Deleted Succesfully" }))
    .catch((error) => res.status(422).json({ error: error }));
};
module.exports.getEditPathologistData = async (req, res) => {
  const { user_id } = req.params;
  try {
    const pathologist = await Pathologist.findOne({ user_id: user_id });
    res.status(200).json({ pathologist: pathologist });
  } catch (error) {
    res.status(400).json({ error: "error" });
  }
};
module.exports.postEditPathologistData = (req, res) => {
  const { user_id } = req.params;
  Pathologist.findOneAndUpdate(
    { user_id: user_id },
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
