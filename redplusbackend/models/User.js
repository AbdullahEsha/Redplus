const mongoose = require("mongoose");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your fullname"],
    },
    email: {
      type: String,
      trim: true,
      required: [true, "Please enter an email"],
      unique: true,
      lowercase: true,
      validate: [isEmail, "Please enter a valid email"],
    },
    password: {
      type: String,
      required: [true, "Please enter a password"],
      minlength: [6, "Password must be of 6 characters"],
    },
    phoneNumber: {
      type: Number,
      required: [true, "Please enter a phone number"],
    },
    userType: {
      type: String,
    },
  },
  { timestamps: true }
);
userSchema.path("email").validate(function (value) {
  if (!value.includes("@")) {
    throw new Error("Please enter a valid email");
  }
});

const User = mongoose.model("User", userSchema);
module.exports = User;
