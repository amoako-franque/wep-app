const Post = require("../models/PostModel")
const slugify = require("slugify")
const User = require("../models/UserModel")
const asyncHandler = require("express-async-handler")
const { response } = require("express")

exports.createPost = asyncHandler(async (req, res) => {
  if (!req.user) {
    return res.status(400).json({ message: "Login to continue" })
  }

  try {
    const { title, body } = req.body

    if (!title) {
      return res.status(400).json({ message: "Please enter a title" })
    }

    if (!body) {
      return res.status(400).json({ message: "Please enter a title" })
    }

    const slug = slugify(title).toLowerCase()
    const existingSlug = await Post.findOne({ slug }).exec()
    if (existingSlug) {
      return res.status(400).json({
        message: "Post with same title exists. Use a different title.",
      })
    }
    const post = await Post.create({
      body,
      title,
      slug,
      postedBy: req.user._id,
    })

    return res.status(201).json({
      message: "Post added",
      post,
    })
  } catch (error) {
    return res.status(400).json({ error: error.message })
  }
})

exports.fetchAllPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find().lean().populate("postedBy", "_id username")
  if (!posts?.length) {
    return res.status(404).send({ message: "No posts found" })
  }
  res.status(200).json({ message: "successful,", posts })
})

exports.getPostBySlug = asyncHandler(async (req, res) => {
  const slug = req.params.slug.toLowerCase()

  if (!slug) {
    return res.status(400).json({
      message: `Cannot find post: ${slug}`,
    })
  }

  try {
    const post = await Post.findOne({ slug })

    if (!post) {
      return res.status(404).json({
        message: "No post found",
      })
    }
    return res.status(200).json({
      success: true,
      post,
    })
  } catch (error) {
    return res.status(400).json({ error: error.message })
  }
})

exports.deletePostBySlug = asyncHandler(async (req, res) => {
  const slug = req.params.slug.toLowerCase()
  //console.log(slug, req.user._id)
  await Post.findOneAndDelete(slug)
    .then((deletedPost) => {
      if (deletedPost) {
        return res.json({
          message: `Post ${deletedPost.title} deleted successfully`,
        })
      } else {
        return res.json({
          message: "No Post  matches the provided query.",
        })
      }
    })
    .catch((err) => {
      console.error(`Failed to find and delete post: ${err}`)
      return res.status(500).json({ error: err.message })
    })
})

exports.updatePost = asyncHandler(async (req, res) => {
  if (!req.user) {
    return res.status(400).json({ message: "Login to continue" })
  }

  const { title, body } = req.body
  const postUpdate = {}

  if (title) {
    postUpdate.title = title
    const slug = slugify(title).toLowerCase()
    const existingSlug = await Post.findOne({ slug }).exec()
    existingSlug &&
      res.status(400).json({
        message: "Post with same title exists. Use a different title.",
      })

    postUpdate.slug = slug
  }

  if (body) {
    postUpdate.body = body
  }

  try {
    const updatedPost = await Post.findOneAndUpdate(
      { slug: req.params.slug.toLowerCase() },
      { $set: postUpdate },
      {
        new: true,
        upsert: true,
        setDefaultsOnInsert: true,
      }
    ).exec()
    return res.status(200).json({
      updatedPost,
    })
  } catch (err) {
    return res.status(400).json({
      err: err.message,
    })
  }
})

exports.canDeletePost = (req, res, next) => {
  const slug = req.params.slug.toLowerCase()
  Post.findOne({ slug }).exec((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      })
    }
    let authorizedUser =
      data.postedBy._id.toString() === req.user._id.toString()
    if (!authorizedUser) {
      return res.status(400).json({
        error: "You are not authorized to delete this post",
      })
    }
    next()
  })
}

exports.canUpdatePost = (req, res, next) => {
  const slug = req.params.slug.toLowerCase()

  Post.findOne({ slug }).exec((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      })
    }

    let authorizedUser = data.postedBy._id.toString() === req.user.id.toString()
    if (!authorizedUser) {
      return res.status(400).json({
        error: "You are not authorized to update this post",
      })
    }
    next()
  })
}
