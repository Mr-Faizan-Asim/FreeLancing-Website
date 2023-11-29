const mongoose = require('mongoose')
const jwt = require("jsonwebtoken")

const userSchema = mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true,minlength:8},
    products: [{type:mongoose.Types.ObjectId,required:true,ref:'Product'}]
})


userSchema.methods.createJWT = async () => {
    return await jwt.sign({userId: this._id, userName:this.name}, process.env.JWT_SECRET, {expiresIn:process.env.JWT_LIFETIME})
}

module.exports = mongoose.model('User',userSchema)