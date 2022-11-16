const express=require("express")
const router=express.Router();
const { newOrder, getOneOrder, myOrders, allOrders, updateOrder, deleteOrder} =require("../controllers/orderController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");


router.route("/orden/nueva").post(isAuthenticatedUser,newOrder)
router.route("/orden/:id").get(isAuthenticatedUser,getOneOrder)
router.route("/ordenes/misOrdenes").get(isAuthenticatedUser,myOrders)

//Rutas de administrador
router.route("/admin/ordenes").get(isAuthenticatedUser, authorizeRoles("admin"), allOrders)
router.route("/admin/orden/:id").put(isAuthenticatedUser, authorizeRoles("admin"),updateOrder)
router.route("/admin/orden/:id").delete(isAuthenticatedUser, authorizeRoles("admin"),deleteOrder)

module.exports=router;