const mongoose = require("mongoose")

const webDb = async () => {
  try {
    const database = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log(
      `MongoDB connected to recipe database ${database.connection.host}`
    )
  } catch (error) {
    console.error(`Error: ${error.message}`)
    process.exit(1)
  }
}

module.exports = webDb
