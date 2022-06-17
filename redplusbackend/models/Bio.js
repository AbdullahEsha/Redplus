const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bioSchema = new Schema(
  {
    name: {
      type: String,
    },
    img: {
      type: File,
    },
    bloodGroup: {
      type: String,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
    },
  },
  { timestamps: true }
);
const Bio = mongoose.model("Bio", bioSchema);
module.exports = Bio;
