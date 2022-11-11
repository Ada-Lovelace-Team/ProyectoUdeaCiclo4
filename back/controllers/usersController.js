const User = require("../models/users")
const ErrorHandler = require("../utils/errorHandler")
const catchAsyncErrors = require("../middleware/catchAsyncErrors")
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
    const token = user.getJwtToken ();

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
// ver perfil de usuario, usuario logueado

exports.getUserProfile =catchAsyncErrors (async(req, res, next)=>{
    const user = await User.findById(req.user.id);
    res.status(200).json({
        success:true,
        user
    })
})
//update contrasena de usuario logueado
exports.updatePassword= catchAsyncErrors(async (req, res, next) =>{
    const user= await User.findById(req.user.id).select("+clave");

    //Revisamos si la contraseña antigua es igual a la nueva
    const mismaClave = await user.compararPass(req.body.oldPassword)

    if (!mismaClave){
        return next (new ErrorHandler("La contraseña actual no es correcta", 401))
    }

    user.clave= req.body.newPassword;
    await user.save();

    tokenEnviado(user, 200, res)
})
//Update perfil de usuario (debe estar logueado)
exports.updateProfile= catchAsyncErrors(async(req,res,next)=>{
    //Actualizar el email por user 
    const newUserData ={
        nombre: req.body.nombre,
        email: req.body.correo
    }

    //updata Avatar

    const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
        new:true,
        runValidators:true,
        useFindAndModify: false
    })

    res.status(200).json({
        success:true,
        user
    })
})

// Servicios administrables solo para el administrador (ADMIN)

// Ver listado de usuarios
exports.getAllUsers= catchAsyncErrors(async(req, res, next)=>{
    const users = await User.find();

    res.status(200).json({
        success:true,
        users
    })
})

//Ver detalle de un usuario 
exports.getUserDetails= catchAsyncErrors(async(req, res, next)=>{
    const user= await User.findById(req.params.id);

    if (!user){
        return next(new ErrorHandler(`No se encontro ningún usuario registrado con il id: ${req.params.id}`))
    }

    res.status(200).json({
        success: true,
        user
    })
})

//Actualizar perfil de un usuario (solo lo puede hacer un administrador)
exports.updateUser= catchAsyncErrors (async(req, res, next)=>{
    const nuevaData={
        nombre: req.body.nombre,
        correo: req.body.correo,
        role: req.body.rol
    }

    const user= await User.findByIdAndUpdate(req.params.id, nuevaData, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success:true,
        user
    })
})
//Eliminar un usuario (admin)
exports.deleteUser= catchAsyncErrors (async (req, res, next)=>{
    const user = await User.findById(req.params.id);

    if(!user){
        return next(new ErrorHandler(`Usuario con id: ${req.params.id} 
        no se encuentra en nuestra base de datos`))
    }

    await user.remove();

    res.status(200).json({
        success:true,
        message:"Usuario eliminado correctamente"
    })
})