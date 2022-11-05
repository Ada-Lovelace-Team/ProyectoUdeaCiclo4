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

 exports.newProduct=catchAsyncErrors (async(req, res, next) =>{  
    req.body.user=req.user.id;
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
