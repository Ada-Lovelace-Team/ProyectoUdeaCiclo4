const express=require("express");
const app=express();

// App usará herramientas que expres relacionadas a json
app.use(express.json());

//Importamos rutas
const productos=require("./routes/products")
app.use('/api',productos)


module.exports=app
const express=require("express");
const app=express();

// App usará herramientas que expres relacionadas a json
app.use(express.json());

//Importamos rutas
const productos=require("./routes/products")
app.use('/api',productos)


module.exports=app

var caracteres = "abcdefghijkmnpqrtuvwxyzABCDEFGHJKMNPQRTUVWXYZ2346789";
var contraseña = "";
for (i=0; i<20; i++) contraseña +=caracteres.charAt(Math.floor(Math.random()*caracteres.length)); 
console.log(contraseña)