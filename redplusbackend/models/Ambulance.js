const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ambulanceSchema = new Schema(
  {
    ambulanceDetails: {
      type: String,
    },
    img: [{ type: String }],
    user_id: {
      type: String,
    },
    cost: {
      type: String,
    },
    driver_nid: {
      type: String,
      trim: true,
    },
    is_avaiable: {
      type: String,
    },
  },
  { timestamps: true }
);
const Ambulance = mongoose.model("Ambulance", ambulanceSchema);
module.exports = Ambulance;
