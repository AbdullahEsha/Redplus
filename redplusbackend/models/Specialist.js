const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SpecialistSchema = new Schema(
  {
    pic: {
      type: String,
    },

    blog: {
      type: String,
    },
  },
  { timestamps: true }
);

const Specialist = mongoose.model("Specialist", SpecialistSchema);
module.exports = Specialist;
