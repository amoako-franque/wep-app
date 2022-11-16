const Post = require("../models/PostModel")
const slugify = require("slugify")
const User = require("../models/UserModel")
const asyncHandler = require("express-async-handler")

exports.createPost = asyncHandler(async (req, res) => {
  res.send("req.body")
})

exports.fetchAllPosts = asyncHandler((req, res) => {
  res.send("fetch all posts")
})

exports.getPostBySlug = asyncHandler(async (req, res) => {
  res.send("get post by slug")
})

exports.deletePostBySlug = asyncHandler(async (req, res) => {
  res.send("delete post by slug")
})

exports.updatePost = asyncHandler(async (req, res) => {
  res.send("update post")
})

exports.canDeletePost = (req, res, next) => {
  res.send("can user delete posts")
}

exports.canUpdatePost = (req, res, next) => {
  res.send("can user update post")
}
