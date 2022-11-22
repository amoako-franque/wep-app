const express = require("express")
const { register, login, logout } = require("../controllers/authCtrl")
const { requireSignIn } = require("../middlewares/authMiddleware")
const router = express.Router()

router.post("/register", register)
router.post("/login", login)
router.post("/logout", logout)
router.get("/get-user-by-id", requireSignIn, logout)

module.exports = router
