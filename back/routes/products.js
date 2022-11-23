const express= require("express")

// Se crea un enrutador
const router=express.Router();

//Traemos la respuesta json desde el controlador
const {getProducts, newProduct, getProductById, updateProduct, deleteProduct, getAdminProducts} = require("../controllers/productsController");
const { isAuthenticatedUser,authorizeRoles } = require("../middleware/auth");
//Establecemos desde que ruta queremos el get
router.route('/productos').get(getProducts)
//Establecemos ruta para el post
router.route('/producto/nuevo').post(isAuthenticatedUser, authorizeRoles ("admin"),newProduct)
// El simbolo : indica que el id hace parte de los parametros a consultar (GET)
router.route('/producto/:id').get(getProductById)
//Ruta para actulizar el producto (PUT)
router.route('/producto/:id').put(isAuthenticatedUser, authorizeRoles ("admin"),updateProduct);
//Ruta de eliminacion por ID
router.route('/producto/:id').delete(isAuthenticatedUser, authorizeRoles ("admin"),deleteProduct);

router.route('/admin/productos').get(isAuthenticatedUser, authorizeRoles ("admin"),getAdminProducts)



module.exports=router;