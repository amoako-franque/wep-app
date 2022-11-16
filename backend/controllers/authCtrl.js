const slugify = require("slugify")
const User = require("../models/UserModel")
const asyncHandler = require("express-async-handler")
const bcrypt = require("bcrypt")
const createToken = require("../utils/generateToken")

exports.register = asyncHandler((req, res) => {
  console.log(req.body)
})


exports.login = asyncHandler((req, res) => {
  res.send(req.body)
})


exports.forgotPassword = asyncHandler((req, res) => {
  res.send(req.body)
})
