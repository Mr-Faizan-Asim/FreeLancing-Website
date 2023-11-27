const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    productName: {type:String,required:true},
    description: {type:String,required:true},
    image:[{type:String,required:true}],
    Owner:{type:mongoose.Types.ObjectId,required:true,ref:'User'},
    createdDate:{type:Number}
})


module.exports = mongoose.model('Product',productSchema)