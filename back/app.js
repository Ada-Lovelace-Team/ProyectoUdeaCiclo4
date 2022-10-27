const express=require("express");
const app=express();

// App usará herramientas que expres relacionadas a json
app.use(express.json());

//Importamos rutas
const productos=require("./routes/products")
app.use('/api',productos)


module.exports=app