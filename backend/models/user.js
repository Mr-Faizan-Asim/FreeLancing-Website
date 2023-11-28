const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true,minlength:8},
    products: [{type:mongoose.Types.ObjectId,required:true,ref:'Product'}]
})

module.exports = mongoose.model('User',userSchema)