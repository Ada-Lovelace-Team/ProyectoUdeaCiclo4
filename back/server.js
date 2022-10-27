const app=require("./app")
const connectDatabase = require("./config/database");


//Setear el archivo de configuration
const dotenv=require("dotenv");
dotenv.config({ path:'back/config/config.env'})

//configuramos la base de datos 
connectDatabase();

//llamamos al server
const server=app.listen(process.env.PORT, () => {
    console.log(`Server iniciado en el puerto: ${process.env.PORT} en modo: ${process.env.NODE_ENV}`)
})