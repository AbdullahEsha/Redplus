const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SupportSchema = new Schema(
  {
    details: {
      type: String,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
    },
  },
  { timestamps: true }
);

const Support = mongoose.model("Support", SupportSchema);
module.exports = Support;
