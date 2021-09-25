import mongoose, { Schema } from "mongoose";

const productoSchema = new Schema(
  {
    nombreProducto: {
      type: String,
      maxlength: 100,
      required: true,
      unique: true,
    },

    precioProducto: {
      type: Number,
      required: true,
    },
    categoria: String,
  },
  { timestamps: true }
);

const Producto = mongoose.model("producto", productoSchema);
export default Producto;
