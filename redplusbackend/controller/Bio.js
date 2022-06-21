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
