const mongoose = require("mongoose")
const Schema = mongoose.Schema
const { ObjectId } = mongoose.Schema

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      min: 3,
      max: 160,
    },
    body: {
      type: String,
      required: true,
      minLength: 40,
    },
    slug: {
      type: String,
      unique: true,
      index: true,
    },

    postedBy: {
      type: ObjectId,
      required: true,
      ref: "User",
    },
  },
  { timestamps: true }
)

const Post = mongoose.model("Post", postSchema)

module.exports = Post
