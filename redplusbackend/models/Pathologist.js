const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PathologistSchema = new Schema(
  {
    specialist_at: {
      type: String,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
    },
    schedule: {
      type: String,
    },
    is_avaiable: {
      type: String,
    },
  },
  { timestamps: true }
);

const Pathologist = mongoose.model("Pathologist", PathologistSchema);
module.exports = Pathologist;
