const express = require("express")
const cors = require("cors")
const fs = require("fs")
const morgan = require("morgan")
const cookieParser = require("cookie-parser")
const webDb = require("./config/db")
const rateLimit = require("express-rate-limit")
const xssClean = require("xss-clean")
require("dotenv").config()
const app = express()

// connect to database
webDb()

//middleware
app.use(cors())
app.use(morgan("dev"))
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(xssClean())

const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, //10 Mins
  max: 100,
  message: {
    message:
      "Too many login attempts from this IP, please try again after a 60 second pause",
  },
  handler: (req, res, next, options) => {
    res.status(options.statusCode).send(options.message)
  },
  standardHeaders: true,
  legacyHeaders: false,
})

app.use(limiter)

app.get("/api-test", (req, res) => res.json({ time: Date().toString() }))

fs.readdirSync("./routes").map((route) =>
  app.use("/api/v1/", require("./routes/" + route))
)

const port = process.env.PORT || 8080

app.listen(port, () =>
  console.log(`app listening on port ${port}! http://localhost:${port}`)
)

//will start frontend tomorrow
//http://localhost:5000
