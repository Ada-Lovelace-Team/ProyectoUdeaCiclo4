const mongoose = require ("mongoose")
const validator =require ("validator")
const bcrypt =require ("bcryptjs")
const jwt= require("jsonwebtoken")
const crypto= require ("crypto")


const usuarioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, "Por favor ingrese el nombre"],
        maxlength: [130, "Nombre no puede exceder los 130 caracteres"]
    },
    correo: {
        type: String,
        required: [true, "Por favor ingrese el correo electronico"],
        unique: true,
        validate: [validator.isEmail, "Por favor ingrese un correo electronico valido"]
   
    },
    clave: {
        type: String,
        required: [true, "Por favor registre una contraseña"],
        minlength: [8, "Su contraseña no puede tener menos de 8 caracteres"],
        select: false
    },
    avatar: {
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },
    role:{
        type: String,
        default: 'user'
    
    },
    fechaRegistro: {
        type: Date,
        default: Date.now
    },
    resetPasswordToken: String,
    resetPasswordExprire: Date
})
//Encriptamos la contrasena antes de guardarla
usuarioSchema.pre("save", async function (next) {
    if (!this.isModified("clave")) {
        next()
    }
    this.clave = await bcrypt.hash(this.clave, 10)
})   
// Decodificamos contrasena y comparamos

usuarioSchema.methods.compararPass = async function (passDada){
    return await bcrypt.compare(passDada, this.clave)
}
 usuarioSchema.methods.getJwtToken = function () {
    return jwt.sign({id: this._id},process.env.JWT_secret,{
        expiresIn: process.env.JWT_EXPIRES_TIME
    }
        )

}
// Generamos un token para reset 

usuarioSchema.methods.genResetPasswordToken =function(){
    const resetToken = crypto.randomBytes(20).toString('hex')


// hashear un token para reset de contrasena
this.resetPasswordToken =crypto.createHash("sha256").update(resetToken).digest('hex')

// setear fecha de expiracion 
this.resetPasswordExprire= Date.now()+ 30*60*1000 //el token dura solo 30 min
return resetToken
} 
module.exports = mongoose.model("users",usuarioSchema)