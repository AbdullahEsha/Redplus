const { model } = require("mongoose");
const User = require("../models/User");

module.exports.getUserData = (req, res) => {
  User.find()
    .then((user) => {
      res.status(200).json({ user: user });
    })
    .catch((err) => {
      res.status(422).json({ error: err });
    });
};

module.exports.storeUserData = async (req, res) => {
  const { email, password, phoneNumber, userType } = req.body;
  const userData = new User({
    email,
    password,
    phoneNumber,
    userType,
  });
  userData
    .save()
    .then((response) => {
      res.status(200).json({ response: response });
    })
    .catch((err) => console.log(err));
};

module.exports.getUserId = async (email, res) => {
  User.findOne({ email: email })
    .then((data) => res.status(200).json({ userData: data }))
    .catch((err) => res.status(422).json({ error: err }));
};

module.exports.destroyUserData = (req, res) => {
  const { id } = req.params;
  User.findByIdAndDelete({ _id: id })
    .then(() => res.status(200).json({ msg: "Deleted Succesfully" }))
    .catch((error) => res.status(422).json({ error: error }));
};
module.exports.getEditUserData = async (req, res) => {
  const { user_id } = req.params;
  try {
    const user = await User.findOne({ user_id: user_id });
    res.status(200).json({ user: user });
  } catch (error) {
    res.status(400).json({ error: "error" });
  }
};
module.exports.postEditUserData = (req, res) => {
  const { user_id } = req.params;
  User.findOneAndUpdate(
    { user_id: user_id },
    {
      $set: {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        phoneNumber: req.body.phoneNumber,
        userType: req.body.userType,
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
