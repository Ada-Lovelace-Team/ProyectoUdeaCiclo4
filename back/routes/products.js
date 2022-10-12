const express= require("express")
const router=express.Router();

//Traemos la respuesta json desde el controlador
const {getProducts, newProduct} = require("../controllers/productsController")
//Establecemos desde que ruta queremos el get
router.route('/productos').get(getProducts)
//Establecemos ruta para el post
router.route('/producto/nuevo').post(newProduct)

module.exports=router;