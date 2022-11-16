const express = require("express")
const cors = require("cors")
const fs = require("fs")
const morgan = require("morgan")
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
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(xssClean())

const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, //10 Mins
  max: 100,
})

app.use(limiter)

app.get("/api-test", (req, res) => res.send("Hello World!"))

fs.readdirSync("./routes").map((route) =>
  app.use("/", require("./routes/" + route))
)

const port = process.env.PORT || 8080

app.listen(port, () =>
  console.log(`app listening on port ${port}! http://localhost:${port}`)
)

// will start by implementing user registration, user login and password reset features
