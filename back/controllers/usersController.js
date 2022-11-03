const User = require("../models/users")
const ErrorHandler = require("../utils/errorHandler")
const catchAsyncErrors = require("../middleware/catchAsyncErrors")

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

    res.status(201).json({
        success:true,
        user
    })
})