// Archivo para conectarse a la BD. 
// Mongoose, herramienta(instalada previamente) que permite ejecutar querys sobre BD
const mongoose=require("mongoose");

// Método constante que permite crear la base de datos. 
const connectDatabase = () =>{
    mongoose.connect(process.env.DB_LOCAL_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true

    }).then(con =>{
        console.log(`Base de datos mongo conectada con el servidor: ${con.connection.host}`)
    }).catch(con =>{
        console.log(`No se logró la conexión con la base de datos`)
    })
}

module.exports=connectDatabase;


