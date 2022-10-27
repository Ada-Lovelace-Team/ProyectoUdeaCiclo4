const mongoose = require("mongoose");

const productosSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: [true, "Por favor ingrese el nombre del producto."],
    trim: true, //elimina caracteres en blanco al final e inicio del string
    maxLength: [
      120,
      "El nombre del producto no debe exceder los 120 caracteres.",
    ],
  },
  precio: {
    type: Number,
    required: [true, "Por favor ingrese el precio del producto."],
    maxLength: [
      10,
      "El precio del producto no puede estar por enciama de 9'999'999.999",
    ],
    default: 0.0,
  },
  talla: {
    type: Number,
    required: [true, "Por favor seleccione la talla del producto."],
    enum: {
      values: [
        18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35,
        36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47,
      ],
    },
  },
  descripcion: {
    type: String,
    required: [true, "Por favor ingrese la descripción del producto."],
  },
  calificacion: {
    type: Number,
    default: 0,
  },
  imagen: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  categoria: {
    type: String,
    required: [true, "Por favor seleccione la categoria del producto."],
    enum: {
      values: ["Mujer", "Hombre", "Niños"],
    },
  },
  proveedor: {
    type: String,
    required: [true, "Por favor ingrese el nombre del proveedor"],
  },
  inventario: {
    type: Number,
    required: [true, "Por favor ingrese el inventario del producto"],
    maxLength: [3, "Cantidad maxima del producto no puede sobrepasar 999"],
    default: 0,
  },
  numCalificaciones: {
    type: Number,
    default: 0,
  },
  feedback: [
    {
      nombreCliente: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comentario: {
        type: String,
        required: true,
      },
    },
  ],
  fechaCreacion: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("productos", productosSchema);

module.exports=mongoose.model("productos",productosSchema) 