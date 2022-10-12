const producto=require("../models/productos")

//Crear la lista de productos
exports.getProducts=(req,res,next) =>{
    res.status(200).json({
        sucess:true,
        message: "En esta ruta se veran los productos disponibles"

    })
 }

 // Crear nuevo producto /api/productos

 exports.newProduct=async(req, res, next) =>{
    const product= await producto.create(req.body)

 }