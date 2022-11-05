const express =require("express");
const { registroUsuario } = require("../controllers/usersController");
const router = express.Router();

router.route('/usuario/registro').post(registroUsuario)

module.exports= router