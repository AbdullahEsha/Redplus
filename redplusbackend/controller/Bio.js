const Bio = require("../models/Bio");

module.exports.getBioData = (req, res) => {
  Bio.find()
    .then((bio) => {
      res.status(200).json({ bio: bio });
    })
    .catch((err) => {
      res.status(422).json({ error: err });
    });
};

module.exports.storeBioData = async (req, res, user_id) => {
  const { name, img, bloodGroup, location, medical_history } = req.body;
  const bioData = new Bio({
    name,
    img,
    bloodGroup,
    user_id,
    location,
    medical_history,
  });
  bioData
    .save()
    .then((response) => {
      res.status(200).json({ response: response });
    })
    .catch((err) => console.log(err));
};
