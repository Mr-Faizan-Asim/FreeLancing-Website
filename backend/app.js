const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()
const {registerUser} = require("./controller/authController")
app.use(express.json())



//routes
app.post("/register", registerUser)




// errors
const {errorHandlerMiddlerware} = require("./middleware/errorHandler")
app.use(errorHandlerMiddlerware)

module.exports = app