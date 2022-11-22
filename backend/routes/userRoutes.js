const express = require("express")
const {
  profileUpdate,
  deleteUser,
  fetchUsers,
  getUserById,
} = require("../controllers/userCtrl")
const { requireSignIn } = require("../middlewares/authMiddleware")
const router = express.Router()

router.get("/users", fetchUsers)
router.get("/get-user-by-id", requireSignIn, getUserById)
router.put("/user/update/:slug", requireSignIn, profileUpdate)
router.delete("/user/:slug", requireSignIn, deleteUser)

module.exports = router
