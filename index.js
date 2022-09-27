require('dotenv').config()
const express = require("express")
const sequilize = require('./db.js')

const PORT = process.env.PORT || 5000
const app = express()
app.use(cors())
app.use(express.json())

const start = async () => {
    try {
        // await sequilize.authenticate()
        // await sequilize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()

