const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "Please enter a username"],
      unique: true,
      lowercase: true,
      trim: true,
      min: 4,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "Please enter a valid email address",
      ],
    },

    firstName: {
      type: String,
      default: "",
    },
    lastName: {
      type: String,
      default: "",
    },

    bio: {
      type: String,
      default: "",
    },
    password: {
      type: String,
      min: 6,
      required: [true, "Please enter your password"],
    },
    slug: {
      type: String,
      unique: true,
      index: true,
    },
  },
  { timestamps: true }
)

const User = mongoose.model("User", userSchema)
module.exports = User
