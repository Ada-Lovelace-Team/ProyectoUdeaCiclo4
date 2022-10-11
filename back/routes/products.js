const express= require("express")
const router=express.Router();

//Traemos la respuesta json desde el controlador
const {getProducts} = require("../controllers/productsController")
//Establecemos desde que ruta queremos el get
router.route('/productos').get(getProducts)

module.exports=router;