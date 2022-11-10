const express =require("express");
const { registroUsuario,loginUser,  logOut, forgotPassword, resetPassword } = require("../controllers/usersController");
const { isAuthenticatedUser } = require("../middleware/auth");
const router = express.Router();

router.route('/usuario/registro').post(registroUsuario)
router.route('/login').get(loginUser)
router.route('/logout').post(isAuthenticatedUser, logOut)
router.route('/forgotPassword').post(forgotPassword)
router.route('/resetClave/:token').post(resetPassword)

module.exports= router