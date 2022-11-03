const express=require("express");
const app=express();
const errorMiddleware =require("./middleware/error")
const cookieParse=require("cookie-parser")

// Uso de constantes importadas
app.use(express.json());
app.use(cookieParse());

//Importamos rutas
const productos=require("./routes/products")
const usuarios=require("./routes/users")

app.use('/api',productos)
app.use('/api',usuarios)

//middleware nos permitira manejar errores
app.use(errorMiddleware)

module.exports=app