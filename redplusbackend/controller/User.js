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
  const { name, email, password, phoneNumber, userType } = req.body;
  const userData = new User({
    name,
    email,
    password,
    phoneNumber,
    userType,
  });
  userData
    .save()
    .then((user) => {
      res.status(200).json({ user: "Successfully Added " + user });
    })
    .catch((err) => console.log(err));
};
