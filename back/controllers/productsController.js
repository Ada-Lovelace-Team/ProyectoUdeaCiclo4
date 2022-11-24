const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const producto = require("../models/productos");
const APIFeatures = require("../utils/apiFeatures");
const ErrorHandler = require("../utils/errorHandler");
const fetch = (url) => import('node-fetch').then(({ default: fetch }) => fetch(url)); //Usurpación del require (Importación del Fetch)
const cloudinary = require("cloudinary")

//Ver la lista de productos
exports.getProducts = catchAsyncErrors(async (req, res, next) => {
    const resPerPage = 6;
    const productsCount = await producto.countDocuments();

    const apiFeatures = new APIFeatures(producto.find(), req.query)
        .search()
        .filter();

    let products = await apiFeatures.query;
    let filteredProductsCount = products.length;
    apiFeatures.pagination(resPerPage);
    products = await apiFeatures.query.clone();

    res.status(200).json({
        success: true,
        productsCount,
        resPerPage,
        filteredProductsCount,
        products
    })
})
// Ver lista de productos (usuario Administrador)
exports.getAdminProducts = catchAsyncErrors(async (req, res, next) => {

    const products = await producto.find()

    res.status(200).json({
        products
    })

})


//ver productos por ID
exports.getProductById = catchAsyncErrors(async (req, res, next) => {
    const product = await producto.findById(req.params.id)

    if (!product) {
        return next(new ErrorHandler("Producto no encontrado", 404))

    }
    res.status(200).json({
        success: true,
        message: "Información del producto: ",
        product
    })
})
// upadte un producto
exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
    let product = await producto.findById(req.params.id) //variable let de tipo modificable
    if (!product) { // se verifica que el objeto no exista para finalizar el procceso
        return next(new ErrorHandler("Producto no encontrado", 404))
    }
    let imagen = []

    if (typeof req.body.imagen == "string") {
        imagen.push(req.body.imagen)
    } else {
        imagen = req.body.imagen
    }
    if (imagen !== undefined) {
        // Eliminamos las imagenes asociadas con el producto
        for (let i = 0; i < product.imagen.lenght; i++) {
            const result= await cloudinary.v2.uploader.destroy(product.images[i].public_id)
        }
        let imageLinks = []
        for (let i = 0; i < imagen.lenght; i++) {
            const result = await cloudinary.v2.uploader.upload(imagen[i], {
                folder: "products"
            });
            imageLinks.push({
                public_id: result.public_id,
                url: result.secure_url
            })
        }
        req.body.imagen = imageLinks
    }

    // Si el objeto existe, entonces se ejecuta la actualización
    product = await producto.findByIdAndUpdate(req.params.id, req.body, {
        new: true, //valida solo los atributos nuovos o actualizados
        runValidators: true
    });
    // Responde el mensaje de OK si el producto se actualizó
    res.status(200).json({
        success: true,
        message: "Producto actualizado correctamente",
        product

    })

})
//Eliminar un producto
exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
    const product = await producto.findById(req.params.id) //variable let de tipo modificable
    if (!product) { // se verifica que el objeto no exista para finalizar el procceso
        return next(new ErrorHandler("Producto no encontrado", 404))
    }

    await product.remove();
    res.status(200).json({
        success: true,
        message: "Producto Eliminado Correctamente",

    })
})
// Crear nuevo producto /api/productos

exports.newProduct = catchAsyncErrors(async (req, res, next) => {
    let imagen = []
    if (typeof req.body.imagen === "string") {
        imagen.push(req.body.imagen)
    } else {
        imagen = req.body.imagen
    }

    let imagenLink = []

    for (let i = 0; i < imagen.length; i++) {
        const result = await cloudinary.v2.uploader.upload(imagen[i], {
            folder: "products"
        })
        imagenLink.push({
            public_id: result.public_id,
            url: result.secure_url
        })
    }

    req.body.imagen = imagenLink
    req.body.user = req.user.id;
    const product = await producto.create(req.body);
    res.status(201).json({
        success: true,
        product
    })
})


// crear un feedback


//MECANISMO FETCH
function verProductos() {
    fetch('http://localhost:4000/api/productos')
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.error(err))
}
//verProductos(); Llamamos al metodo para probar la consulta

//Ver productos por ID
function verProductoPorID(id) {
    fetch('http://localhost:4000/api/producto/' + id)
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.error(err))
}

//verProductoPorID('6346db0857a0b9460f590dae');*/
