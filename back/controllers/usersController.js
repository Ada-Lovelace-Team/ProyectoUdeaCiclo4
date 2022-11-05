const User = require("../models/users")
const ErrorHandler = require("../utils/errorHandler")
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const tokenEnviado = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail");
const crypto = require ("crypto")



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

// cerrar sesion

exports.logOut = catchAsyncErrors(async(req, res, next)=>{
    res.cookie("token",null, {
         expires: new Date(Date.now()),
         httpOnly: true
    })

    res.status(200).json({
        success:true,
        message: "Sesión cerrada"
    })
})

// olvide contrasena

exports.forgotPassword = catchAsyncErrors ( async( req, res, next) =>{
    const user= await User.findOne({correo: req.body.correo});

    if (!user){
        return next(new ErrorHandler("Usuario no se encuentra registrado", 404))
    }
    const resetToken= user.genResetPasswordToken();
    
    await user.save({validateBeforeSave: false})

    // crear una url para el reset de contrasena

    const resetUrl= `${req.protocol}://${req.get("host")}/api/resetClave/${resetToken}`;

    const mensaje=`Hola!\n\nEl link para ajustar una nueva contraseña es el 
    siguiente: \n\n${resetUrl}\n\n
    Si no solicitaste cambio de contraseña, por favor comunicate con soporte.\n\n Att:\nConfort Life Store`

    try{
        await sendEmail({
            email:user.correo,
            subject: "Comfort Life Recuperación de la contraseña",
            mensaje
        })
        res.status(200).json({
            success:true,
            message: `Correo enviado a: ${user.correo}`
        })
    }catch(error){
        user.resetPasswordToken=undefined;
        user.resetPasswordExpire=undefined;

        await user.save({validateBeforeSave:false});
        return next(new ErrorHandler(error.message, 500))
    }
})

//resetear contrasena 

exports.resetPassword = catchAsyncErrors(async (req,res,next) =>{

    //Hash el token que llego con la URl
    const resetPasswordToken= crypto.createHash("sha256").update(req.params.token).digest("hex")

    //Buscamos al usuario al que le vamos a resetear la contraseña
    const user= await User.findOne({
        resetPasswordToken,
        resetPasswordExpire:{$gt: Date.now()}
    })
    //El usuario si esta en la base de datos?
    if(!user){
        return next(new ErrorHandler("El token es invalido o ya expiró",400))
    }

    //Diligenciamos los campos?
    if(req.body.password!==req.body.confirmPassword){
        return next(new ErrorHandler("Contraseñas no coinciden",400))
    }

    //Setear la nueva contraseña
    user.password=req.body.clave;
    user.resetPasswordToken=undefined;
    user.resetPasswordExprire=undefined;

    await user.save();
    tokenEnviado(user, 200, res)
})

