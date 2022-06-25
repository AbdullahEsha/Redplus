const Auth = require("../models/Auth");

module.exports.verify = (req, res) => {
  Auth.find()
    .then((auth) => {
      res.status(200).json({ auth: auth });
    })
    .catch((err) => {
      res.status(422).json({ error: err });
    });
};
