const asyncHandler = require("express-async-handler")
const jwt = require("jsonwebtoken")
const User = require("../models/UserModel")

const { TokenExpiredError } = jwt

const catchError = (err, res) => {
  if (err instanceof TokenExpiredError) {
    return res
      .status(401)
      .send({ message: "Unauthorized! Access Token was expired!" })
  }

  return res.status(401).json({ message: "Unauthorized! Sign in to continue" })
}

exports.requireSignIn = asyncHandler(async (req, res, next) => {
  res.send("sign in required")
})
