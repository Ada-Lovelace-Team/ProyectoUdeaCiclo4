const express= require("express")

// Se crea un enrutador
const router=express.Router();

//Traemos la respuesta json desde el controlador
const {getProducts, newProduct, getProductById, updateProduct, deleteProduct} = require("../controllers/productsController");
const { isAuthenticatedUser,authorizeRoles } = require("../middleware/auth");
//Establecemos desde que ruta queremos el get
router.route('/productos').get(isAuthenticatedUser, authorizeRoles ("Admin","user"), getProducts)
//Establecemos ruta para el post
router.route('/producto/nuevo').post(newProduct)
// El simbolo : indica que el id hace parte de los parametros a consultar (GET)
router.route('/producto/:id').get(getProductById)
//Ruta para actulizar el producto (PUT)
router.route('/producto/:id').put(updateProduct);
//Ruta de eliminacion por ID
router.route('/producto/:id').delete(deleteProduct);


module.exports=router;