const HttpError = require("../models/Http-error")

exports.errorHandlerMiddlerware = async (err, req, res, next) => {
    if (err instanceof HttpError){
        return res.status(500).json({error: err.message})
    }
    res.status(500).json({error: "Internal Server Error"})
    next()
}