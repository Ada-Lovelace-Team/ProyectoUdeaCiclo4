const User = require ("../models/users")
const jwt=require("jsonwebtoken")
const ErrorHandler=require ("../utils/errorHandler")
const catchAsyncErrors= require("../middleware/catchAsyncErrors")

// Verificamos si estamos autenticados 
exports.isAuthenticatedUser= catchAsyncErrors(async (req, res, next)=>{
    const {token} = req.cookies

    if (!token){
        return next(new ErrorHandler("Debe iniciar sesion para acceder a esta opción", 401))
    }
    const decodificada =jwt.decode(token, process.env.JWT_SECRET)
    req.user=await User.findById(decodificada.id);

    next ()
})
//Capturamos role
exports.authorizeRoles= (...roles) =>{
    return (req, res, next)=>{
        if(!roles.includes(req.user.role)){
            return next(new ErrorHandler(`Rol (${req.user.role}) no esta autorizado a acceder a esta opción`,403))
        }
        next()
    }
}