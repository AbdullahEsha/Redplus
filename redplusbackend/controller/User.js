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
