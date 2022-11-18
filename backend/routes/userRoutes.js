const express = require("express")
const {
  profileUpdate,
  deleteUser,
  fetchUsers,
} = require("../controllers/userCtrl")
const { requireSignIn } = require("../middlewares/authMiddleware")
const router = express.Router()

router.get("/users", fetchUsers)
router.put("/user/update/:slug", requireSignIn, profileUpdate)
router.delete("/user/:slug", requireSignIn, deleteUser)

module.exports = router
