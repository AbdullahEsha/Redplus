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
module.exports.storeSpecialistData = async (req, res) => {
  const { pic, blog } = req.body;
  const specialistData = new Specialist({
    pic,
    blog,
  });
  specialistData
    .save()
    .then((specialist) => {
      res.status(200).json({ specialist: "Successfully Added " + specialist });
    })
    .catch((err) => console.log(err));
};
