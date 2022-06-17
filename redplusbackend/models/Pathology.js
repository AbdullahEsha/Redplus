const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const pathologySchema = new Schema(
  {
    package: {
      type: String,
    },
    price: {
      type: String,
    },
    details: {
      type: String,
    },
    is_avaiable: {
      type: String,
    },
    specialist_id: {
      type: mongoose.Schema.Types.ObjectId,
    },
  },
  { timestamps: true }
);
const Pathology = mongoose.model("Pathology", pathologySchema);
module.exports = Pathology;
