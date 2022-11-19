const express = require("express")
const {
  fetchAllPosts,
  getPostBySlug,
  createPost,
  canUpdatePost,
  updatePost,
  deletePostBySlug,
  canDeletePost,
} = require("../controllers/postCtrl")
const { requireSignIn } = require("../middlewares/authMiddleware")

const router = express.Router()

/** Public routes   */
router.get("/posts", fetchAllPosts)
router.get("/post/:slug", getPostBySlug)

/** Private routes   */
router.post("/user/post", requireSignIn, createPost)
router.put("/user/post/:slug", requireSignIn, canUpdatePost, updatePost)
router.delete(
  "/user/post/:slug",
  requireSignIn,
  canDeletePost,
  deletePostBySlug
)

module.exports = router

// {

// "email": "myusername@mail.com",
// "password": "myusername"
// }
