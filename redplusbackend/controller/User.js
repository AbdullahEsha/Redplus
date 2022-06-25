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

model.exports.getUserId = async (email, res) => {
  User.findOne({ email: email })
    .then((data) => res.status(200).json({ userData: data }))
    .catch((err) => res.status(422).json({ error: err }));
};
