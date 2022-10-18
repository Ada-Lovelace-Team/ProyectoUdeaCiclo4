const mongoose = require("mongoose");

const descuentoSchema = mongoose.Schema({
    estado: Boolean,
    porcentaje: Number
});

const productoSchema = mongoose.Schema({
  descuento: [
    {
      estado: {
        type: Number,
        required: true,
      },
      porcentaje: {
        type: Number,
        required: true,
      },
    },
  ],
});


/* module.exports = mongoose.model("producto", descuentoSchema); */
module.exports = mongoose.model("producto", productoSchema);

/* {
    "descuento":{
        "estado": true,
        "porcentaje":20
    }
} */