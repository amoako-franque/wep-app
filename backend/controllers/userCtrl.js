const User = require("../models/UserModel")
const bcrypt = require("bcrypt")
const slugify = require("slugify")
const asyncHandler = require("express-async-handler")
const Post = require("../models/PostModel")

exports.fetchUsers = asyncHandler(async (req, res) => {
  try {
    const users = await User.find().select("-password").lean()

    const totalNumberOfUsers = users.length

    users && res.status(200).json({ users, totalNumberOfUsers })
  } catch (error) {
    return res.status(404).json({ errors: error.message })
  }
})

exports.getUserById = asyncHandler(async (req, res) => {
  //console.log(req.user.id)
  const userId = req.user.id

  try {
    const user = await User.findById(userId)
    user.password = undefined
    if (!user) {
      return res
        .status(200)
        .send({ message: "User does not exist", success: false })
    } else {
      res.status(200).send({
        success: true,
        data: user,
      })
    }
  } catch (error) {
    res
      .status(500)
      .send({ message: "Error getting user info", success: false, error })
  }
})

exports.profileUpdate = asyncHandler(async (req, res) => {
  if (req.user.slug !== req.params.slug.toLowerCase()) {
    res.status(400).json({ error: "Please Sign in to continue" })
  }
  const user = req.user
  try {
    const { password, bio, email, username, lastName, firstName } = req.body
    const updateInfo = {}

    if (username) {
      const duplicate = await User.findOne({ username }).lean().exec()
      if (duplicate && duplicate?._id.toString() !== user.id) {
        return res.status(409).json({ message: "Duplicate username" })
      }
      updateInfo.username = username
      const slug = slugify(username).toLowerCase()
      updateInfo.slug = slug
    }

    if (firstName) {
      updateInfo.firstName = firstName
    }
    if (bio) {
      updateInfo.bio = bio
    }

    if (email) {
      updateInfo.email = email
    }
    if (lastName) {
      updateInfo.lastName = lastName
    }

    if (password) {
      const salt = await bcrypt.genSalt(10)
      const hashedPassword = await bcrypt.hash(password, salt)
      updateInfo.password = hashedPassword
    }

    const updatedUser = await User.findByIdAndUpdate(
      user._id,
      { $set: updateInfo },
      {
        new: true,
        upsert: true,
        setDefaultsOnInsert: true,
      }
    )

    updatedUser.password = undefined
    return res
      .status(200)
      .json({ message: "Profile has been updated", updatedUser })
  } catch (err) {
    if (err.code === 11000) {
      return res.json({ error: " Username already taken" })
    }
    return res.status(500).json({ err })
  }
})

exports.deleteUser = asyncHandler(async (req, res) => {
  if (req.user.slug !== req.params.slug.toLowerCase()) {
    res.status(400).json({ error: "Please Sign in to continue" })
  }

  const user = req.user

  try {
    await Post.deleteMany({ postedBy: user._id })

    await User.findByIdAndDelete({ _id: user._id })

    const cookies = req.cookies
    cookies &&
      res.clearCookie("token", {
        httpOnly: true,
        sameSite: "None",
        secure: true,
      })

    res.json({ message: "User deleted successfully" })
  } catch (error) {
    console.error(error.message)
    res.status(500).send("Server error")
  }
})
