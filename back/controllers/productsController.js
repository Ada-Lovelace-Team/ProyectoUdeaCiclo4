<<<<<<< HEAD
const {restart} =require ("nodemon");
const producto=require("../models/productos")

//Crear la lista de productos
// Estado 200 porque es una consulta OK 
exports.getProducts= async (req,res,next) =>{
    const productos= await producto.find(); // traera la lista de productos
    res.status(200).json({
        sucess:true,
        cantidad: productos.length,
        productos
    })
 }
 //ver productos por ID
 exports.getProductById = async(req,res,next)=>{
    const product=await producto.findById(req.params.id)
    if (!product){
        return res.status(404).json({
            success:false,
            message:'No encontramos ese producto'
        })
    }
    res.status(200).json({
        success:true,
        message: "Información del producto: ",
        product
    })
 }  
 // upadte un producto
exports.updateProduct= async (req,res,next) =>{
    let product=await producto.findById(req.params.id) //variable let de tipo modificable
    if (!product){ // se verifica que el objeto no exista para finalizar el procceso
        return res.status(404).json({
            success:false,
            message:'No encontramos ese producto'

        })
    }
    // Si el objeto existe, entonces se ejecuta la actualización
    product= await producto.findByIdAndUpdate(req.params.id, req.body,{
        new:true, //valida solo los atributos nuovos o actualizados
        runValidators:true
        });
        // Responde el mensaje de OK si el producto se actualizó
        res.status(200).json({
            success:true,
            message:"Producto actualizado correctamente",
            product

        })
        
    }   
    //Eliminar un producto
    exports.deleteProduct= async (req,res,next) =>{
        const product=await producto.findById(req.params.id) //variable let de tipo modificable
        if (!product){ // se verifica que el objeto no exista para finalizar el procceso
            return res.status(404).json({// Si no se encutra el producto se termina el metodo
                success:false,
                message:'No encontramos ese producto'
    
            })
        }
        await product.remove();
        res.status(200).json({
            success:true,
            message:"Producto Eliminado Correctamente",
            
        })
    }
 // Crear nuevo producto /api/productos

 exports.newProduct=async(req, res, next) =>{
    const product= await producto.create(req.body);

    res.status(201).json({
        success:true,
        product
    })


 }  

=======
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const producto=require("../models/productos");
const ErrorHandler = require("../utils/errorHandler");
const fetch =(url)=>import('node-fetch').then(({default:fetch})=>fetch(url)); //Usurpación del require (Importación del Fetch)


//Ver la lista de productos
exports.getProducts= catchAsyncErrors (async (req,res,next) =>{
    const productos= await producto.find(); // traera la lista de productos
    if (!productos){
        return next (new ErrorHandler("Informacion no encontrada", 404))
    }

    res.status(200).json({
        succes:true,
        cantidad: productos.length,
        productos
    })
 })
>>>>>>> 4f95562cd8ded416edee21f87ecf7e6baf71eb21


 //ver productos por ID
 exports.getProductById =catchAsyncErrors( async(req,res,next)=>{
    const product= await producto.findById(req.params.id)
    
    if (!product){
        return next(new ErrorHandler("Producto no encontrado", 404))

        }
    res.status(200).json({
        success:true,
        message: "Información del producto: ",
        product
    })
})
// upadte un producto
exports.updateProduct= catchAsyncErrors (async (req,res,next) =>{
    let product=await producto.findById(req.params.id) //variable let de tipo modificable
    if (!product){ // se verifica que el objeto no exista para finalizar el procceso
        return next(new ErrorHandler("Producto no encontrado", 404))
    }
    // Si el objeto existe, entonces se ejecuta la actualización
    product= await producto.findByIdAndUpdate(req.params.id, req.body,{
        new:true, //valida solo los atributos nuovos o actualizados
        runValidators:true
        });
        // Responde el mensaje de OK si el producto se actualizó
        res.status(200).json({
            success:true,
            message:"Producto actualizado correctamente",
            product

        })
        
    })
    //Eliminar un producto
    exports.deleteProduct= catchAsyncErrors(async (req,res,next) =>{
        const product=await producto.findById(req.params.id) //variable let de tipo modificable
        if (!product){ // se verifica que el objeto no exista para finalizar el procceso
            return next(new ErrorHandler("Producto no encontrado", 404))
        }
        
        await product.remove();
        res.status(200).json({
            success:true,
            message:"Producto Eliminado Correctamente",
            
        })
    })
 // Crear nuevo producto /api/productos

<<<<<<< HEAD
 }
 
=======
 exports.newProduct=catchAsyncErrors (async(req, res, next) =>{
    const product= await producto.create(req.body);

    res.status(201).json({
        success:true,
        product
    })


 })
 //MECANISMO FETCH
 function verProductos(){
    fetch('http://localhost:4000/api/productos')
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.error(err))
}
//verProductos(); Llamamos al metodo para probar la consulta

//Ver productos por ID
function verProductoPorID(id){
    fetch('http://localhost:4000/api/producto/'+id)
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.error(err))
}

//verProductoPorID('6346db0857a0b9460f590dae');*/
>>>>>>> 4f95562cd8ded416edee21f87ecf7e6baf71eb21
