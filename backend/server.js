const dotenv = require('dotenv')
const app = require('./app.js')
const connectDatabase = require('./db/database.js')

dotenv.config({path:"config/config.env"})

connectDatabase()


const server = app.listen(process.env.PORT,()=>{
    console.log("server is working on " + process.env.PORT)
})