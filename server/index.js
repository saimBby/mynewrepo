require('dotenv').config()

const express = require('express')
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors())

app.post("/signup", (req, res) => {
    console.log(req.body)
})

app.listen(process.env.PORT, () => {
    console.log('connected to db & listening on port', process.env.PORT)
})
