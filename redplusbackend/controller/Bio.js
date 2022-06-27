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
module.exports.destroyBioData = (req, res) => {
  const { id } = req.params;
  Bio.findByIdAndDelete({ _id: id })
    .then(() => res.status(200).json({ msg: "Deleted Succesfully" }))
    .catch((error) => res.status(422).json({ error: error }));
};
module.exports.getEditBioData = async (req, res) => {
  const { user_id } = req.params;
  try {
    const bio = await Bio.findOne({ user_id: user_id });
    res.status(200).json({ bio: bio });
  } catch (error) {
    res.status(400).json({ error: "error" });
  }
};
module.exports.postEditBioData = (req, res) => {
  const { user_id } = req.params;
  Bio.findOneAndUpdate(
    { user_id: user_id },
    {
      $set: {
        name: req.body.name,
        img: req.body.img,
        bloodGroup: req.body.bloodGroup,
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
