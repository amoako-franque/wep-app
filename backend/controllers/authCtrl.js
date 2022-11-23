const slugify = require("slugify")
const User = require("../models/UserModel")
const asyncHandler = require("express-async-handler")
const bcrypt = require("bcrypt")
const createToken = require("../utils/generateToken")

exports.register = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body

  if (!username || !email || !password) {
    res.status(400).json({ message: "Please fill all fields." })
  }

  if (password && password.length < 6) {
    return res
      .status(400)
      .json({ message: "Please password must be at least 6 characters" })
  }

  const existingUser = await User.findOne({
    $or: [{ username } || { email }],
  })
    .lean()
    .exec()

  if (existingUser) {
    return res.status(400).json({ message: "User already exists" })
  }

  const slug = slugify(username).toLowerCase()
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  const user = await User.create({
    username,
    email,
    password: hashedPassword,
    slug,
  })

  if (user) {
    return res.status(201).json({
      message: "Signup success! Please login.",
      success: true,
    })
  } else {
    return res
      .status(400)
      .json({ error: "Registration failed. Please try again later" })
  }
})

exports.login = asyncHandler(async (req, res) => {
  const { username, password } = req.body
  const user = await User.findOne({ username })

  if (!user) {
    return res
      .status(400)
      .json({ error: "This user does not exist. Please sign up " })
  }
  const match = await bcrypt.compare(password, user.password)

  if (match) {
    const userToken = createToken(user._id, user.email)

    res.cookie("token", userToken, {
      httpOnly: true,
      secure: true,
      sameSite: "None",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    })

    user.password = undefined

    
    return res.status(200).json({
      message: `Welcome back ${user.username}`,
      token: userToken,
      user,
    })
  } else {
    return res.status(401).json({ error: "Invalid user credentials" })
  }
})

exports.logout = asyncHandler(async (req, res, next) => {
  const cookies = req.cookies
  cookies &&
    res.clearCookie("token", { httpOnly: true, sameSite: "None", secure: true })
  return res.status(200).json({
    success: true,
    message: "Logged out successfully.",
  })
})
