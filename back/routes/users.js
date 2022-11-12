const express =require("express");
const { registroUsuario,loginUser,  logOut, forgotPassword, resetPassword, getUserProfile, updatePassword, updateProfile, getAllUsers, getUserDetails, updateUser, deleteUser } = require("../controllers/usersController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const router = express.Router();

router.route('/usuario/registro').post(registroUsuario)
router.route('/login').get(loginUser)
router.route('/logout').post(isAuthenticatedUser, logOut)
router.route('/forgotPassword').post(forgotPassword)
router.route('/resetPassword/:token').post(resetPassword)
router.route('/myAccount').get(isAuthenticatedUser,getUserProfile)
router.route('/myAccount/updatePassword').put(isAuthenticatedUser,updatePassword)
router.route('/myAccount/updateProfile').get(isAuthenticatedUser,authorizeRoles)

//Routes administrador

router.route('/admin/allUsers').get(isAuthenticatedUser,authorizeRoles ("admin"), getAllUsers)
router.route('/admin/user/:id').get(isAuthenticatedUser,authorizeRoles ("admin"), getUserDetails)
router.route('/admin/updateUser/:id').put(isAuthenticatedUser,authorizeRoles ("admin"), updateUser)
router.route('/admin/deleteUser/:id').delete(isAuthenticatedUser,authorizeRoles ("admin"),deleteUser)


module.exports= router