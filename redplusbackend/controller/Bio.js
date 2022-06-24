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
module.exports.storeBioData = async (req, res) => {
  const { name, img, bloodGroup } = req.body;
  const bioData = new Bio({
    name,
    img,
    bloodGroup,
  });
  bioData
    .save()
    .then((bio) => {
      res.status(200).json({ bio: "Successfully Added " + bio });
    })
    .catch((err) => console.log(err));
};
