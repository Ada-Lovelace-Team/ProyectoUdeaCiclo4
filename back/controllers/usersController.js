const User = require("../models/users")
const ErrorHandler = require("../utils/errorHandler")
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const tokenEnviado = require("../utils/jwtToken");

//Metodo que me va permitir registrar un nuevo usuario /api/usuario/registro

exports.registroUsuario= catchAsyncErrors(async(req, res, next) =>{
    const {nombre, correo, clave} = req.body;

    const user = await User.create({
        nombre,
        correo,
        clave,
        avatar:{
            public_id: "205838163",
            url:"https://thumbs.dreamstime.com/b/person-icon-flat-design-template-isolated-avatar-symbol-vector-illustration-person-icon-flat-design-template-isolated-avatar-sign-205838163.jpg"
        }
    })

    tokenEnviado(user,201,res)
   
  
})

//Inician sesion 

exports.loginUser =catchAsyncErrors(async(req,res,next)=> {
    const{correo,clave} =req.body;

// revisar si los campos estan diligenciados
if (!correo || !clave){
    return next(new ErrorHandler("Por favor ingrese el correo y la contraseña", 400))
}
// revisar si el usuario esta registrado en el db

const user =await User.findOne ({correo}).select("+clave")

if(!user){
    return next(new ErrorHandler("Correo o contraseña incorrectos", 401))
}

// conpara si la contrasena coincide 
const claveOK= await user.compararPass(clave);
if (!claveOK){
    return next (new ErrorHandler("Contraseña incorrecta", 401))
}
//Generacion de toquen despues de reconocer usuario y clave

tokenEnviado(user,200,res)


})