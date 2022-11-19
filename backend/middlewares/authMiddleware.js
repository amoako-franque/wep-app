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
  let token

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1]

      jwt.verify(token, process.env.JWT_SECRET, async (err, verifiedToken) => {
        if (err) {
          return catchError(err, res)
        }

        const userId = verifiedToken.userId
        const user = await User.findById(userId).select("-password")
        if (!user) {
          return res
            .status(401)
            .json({ error: "Unauthorized. Sign in to continue" })
        }
        req.user = user

        next()
      })
    } catch (error) {
      console.log(
        `Error getting user information. Access denied: ${error.message}`
      )
      return res.status(401).json({ error: "Access Denied" })
    }
  }

  if (!token) {
    return res
      .status(401)
      .json({ error: "Access Denied. Please login to continue" })
  }
})
