const Pathologist = require("../models/Pathologist");

module.exports.getSpecialistData = (req, res) => {
  Pathologist.find()
    .then((pathologist) => {
      res.status(200).json({ pathologist: pathologist });
    })
    .catch((err) => {
      res.status(422).json({ error: err });
    });
};
module.exports.storeSpecialistData = async (req, res) => {
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
