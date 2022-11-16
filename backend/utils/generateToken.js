const jwt = require("jsonwebtoken")

const createToken = (userId, email) => {
  return jwt.sign({ userId, email }, process.env.JWT_SECRET, {
    expiresIn: "30 days",
  })
}

module.exports = createToken
