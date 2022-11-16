const User = require("../models/UserModel")
const bcrypt = require("bcrypt")
const slugify = require("slugify")
const asyncHandler = require("express-async-handler")
const Post = require("../models/PostModel")

exports.profileUpdate = asyncHandler(async (req, res) => {
  res.send("update user info")
})

exports.deleteUser = asyncHandler(async (req, res) => {
  res.send("delete user and user posts")
})

exports.getMyProfile = asyncHandler(async (req, res) => {
  res.send("view my profile")
})

exports.getUserProfile = asyncHandler(async (req, res) => {
  res.send("view users profile")
})
