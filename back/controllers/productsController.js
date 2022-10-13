const producto=require("../models/productos")

//Crear la lista de productos
// Estado 200 porque es una consulta OK 
exports.getProducts=(req,res,next) =>{
    res.status(200).json({
        sucess:true,
        message: "En esta ruta se veran los productos disponibles"

    })
 }

 // Crear nuevo producto /api/productos
 exports.newProduct=async(req, res, next) =>{
    const product= await producto.create(req.body);

    res.status(201).json({
        sucess: true,
        product 
        })
}
