const User = require('../models/user')
const jwt = require('jsonwebtoken')
const HttpError = require('../models/Http-error')

exports.registerUser = async(req,res,next)=>{
    const {email,password} =req.body

    let user
    try{
        user = await User.findOne({email:email})
    }catch(err){
        return next(new HttpError('Can Not Login Please try again',500))
    }
    if(!user)
    {
        user = await User.create(req.body)
        return res.json(user)
    }
}