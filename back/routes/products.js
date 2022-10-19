const express= require("express")

// Se crea un enrutador
const router=express.Router();

//Traemos la respuesta json desde el controlador
// Como lo que retorna es un json se pone entre llaves
const {getProducts, newProduct} = require("../controllers/productsController")



router.route('/productos').get(getProducts) //ruta queremos el get
router.route('/productos/nuevo').post(newProduct)//Establecemos ruta para el post

module.exports=router;