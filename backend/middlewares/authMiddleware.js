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
  const authHeader = req.headers.authorization || req.headers.Authorization

  if (!authHeader?.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized" })
  }

  try {
    const token = authHeader.split(" ")[1]

    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
      if (err) return catchError(err, res)

      const userId = decoded.userId
      const user = await User.findById(userId).select("-password")

      if (!user)
        return res
          .status(401)
          .json({ error: "Unauthorized. Sign in to continue" })

          req.user = user

      next()
    })
  } catch (error) {
    console.log(
      `Error getting user information. Access denied: ${error.message}`
    )
    return res.status(401).json({ error: "Access Denied" })
  }
})
