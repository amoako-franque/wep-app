const mongoose = require("mongoose")
const Schema = mongoose.Schema
const { ObjectId } = mongoose.Schema

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    shortDesc: {
      type: String,
    },
    content: {
      type: String,
      required: true,
      minLength: 40,
    },
    numViews: {
      type: Number,
      default: 0,
    },
    slug: {
      type: String,
      unique: true,
      index: true,
    },

    postedBy: {
      type: ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
)

const Post = mongoose.model("Blog", postSchema)

module.exports = Post
