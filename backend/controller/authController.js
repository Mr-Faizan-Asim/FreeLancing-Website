const User = require('../models/user')
const jwt = require('jsonwebtoken')
const HttpError = require('../models/Http-error')

exports.registerUser = async(req,res,next)=>{
    const user = await User.findOne({email:req.body.email})
    if (user) return next(new HttpError("User already exists with this email"))
    user = await User.create(req.body)
    const token = await user.createJWT()
    return res.status(200).json({user: {name:user.name}, token})
}

exports.login = async(req, res, next)=>{
    
}