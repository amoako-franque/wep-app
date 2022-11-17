const express = require("express")
const {
  getUserProfile,
  profileUpdate,
  deleteUser,
} = require("../controllers/userCtrl")
const router = express.Router()

router.get("/user/:username", getUserProfile)
router.put("/user/update/:slug", requireSignIn, profileUpdate)
router.delete("/user/:slug", requireSignIn, deleteUser)

module.exports = router
