import { Router } from "express";
import productosController from "../controllers/producto.controllers";
const router = Router();

const {
  listarProductos,
  crearProductos,
  eliminarProductos,
  obtenerProducto,
  editarProducto,
} = productosController;

router.route("/").get(listarProductos).post(crearProductos);

router
  .route("/:id")
  .delete(eliminarProductos)
  .get(obtenerProducto)
  .put(editarProducto);

export default router;
