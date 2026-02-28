const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "user must have a name"],
    trim: true,
    lowercase: true,
  },
  email: {
    type: String,
    required: [true, "user must have an email"],
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, "user must have a password"],
    trim: true,
    select: false,
  },
  confirmPassword: {
    type: String,
    required: [true, "user must have a confirm password"],
    trim: true,
  },
});

UserSchema.pre("save", async function () {
  if (!this.isModified("password")) return;

  this.password = await bcrypt.hash(this.password, 12);
  this.confirmPassword = undefined;
});

UserSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword,
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

module.exports = mongoose.model("User", UserSchema);
