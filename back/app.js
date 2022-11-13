const express=require("express");
const app=express();
const errorMiddleware =require("./middleware/error")
const cookieParse=require("cookie-parser")
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')


// App usará herramientas que expres relacionadas a json
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParse());
app.use(fileUpload());



//Importamos rutas
const productos=require("./routes/products")
const usuarios=require("./routes/users")

app.use('/api',productos)
app.use('/api',usuarios)




//middleware nos permitira manejar errores
app.use(errorMiddleware)

module.exports=app