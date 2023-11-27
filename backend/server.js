const dotenv = require('dotenv')
const app = require('./app.js')


dotenv.config({path:"config/config.env"})

const server = app.listen(process.env.PORT,()=>{
    console.log("server is working on " + process.env.PORT)
})