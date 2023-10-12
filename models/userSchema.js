const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const SALT_ROUNDS = 6;

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      trim: true,
      lowercase: true,
      required: [true, "A first name is required to create a user account."],
    },
    lastName: {
      type: String,
      trim: true,
      lowercase: true,
      required: [true, "A last name is required to create a user account."],
    },
    username: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
      required: [true, "A username is required to create a user account."],
    },
    email: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
      required: [true, "An email is required to create a user account."],
    },
    password: {
      type: String,
      trim: true,
      minLength: 10,
      required: [true, "A password is required to create a user account."],
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: function (doc, ret) {
        delete ret.password;
        return ret;
      },
    },
  }
);

userSchema.pre("save", async function (next) {
  // 'this' is the user doc
  if (!this.isModified("password")) return next();
  // update the password with the computed hash
  this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
  return next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;