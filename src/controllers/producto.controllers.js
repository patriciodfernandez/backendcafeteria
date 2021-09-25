import Producto from "../models/producto";
const cafeteriactrl = {};

// cafeteriactrl.getProductos = (req, res) => {};

cafeteriactrl.crearProductos = async (req, res, next) => {
  console.log(req.body);
  const { nombreProducto, precioProducto, categoria } = req.body;

  try {
    const productoNuevo = new Producto({
      nombreProducto: nombreProducto,
      precioProducto: precioProducto,
      categoria: categoria,
    });
    await productoNuevo.save();
    res.status(201).json({ mensaje: "Todo bien" });
  } catch (error) {
    res.status(500).json({ mensajError: "Error al obtener la lista" });
    next(error);
  }
};

cafeteriactrl.listarProductos = async (req, res, next) => {
  try {
    const arregloProductos = await Producto.find();
    res.status(200).json(arregloProductos);
  } catch (error) {
    res.status(500).json({ mensajError: "Falló la carga de producto" });
    next(error);
  }
};

cafeteriactrl.eliminarProductos = async (req, res) => {
  try {
    // console.log("req", req);
    // console.log("reqparamsid", req.params.id);+
    await Producto.findByIdAndDelete(req.params.id);
    res.status(200).json({ mensaje: "El producto fue eliminado" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msj: "No se pudo eliminnar el producto",
    });
  }
};
cafeteriactrl.obtenerProducto = async (req, res) => {
  try {
    // console.log("req", req);
    // console.log("reqparamsid", req.params.id);+

    const productoBuscado = await Producto.findById(req.params.id);

    res.status(200).json(productoBuscado);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      msj: "No se pudo encontrar el producto solicitado",
    });
  }
};

cafeteriactrl.editarProducto = async (req, res) => {
  try {
    console.log("req", req.body);
    // console.log("reqparamsid", req.params.id);+

    await Producto.findByIdAndUpdate(req.params.id, req.body);

    res.status(200).json({ msj: "El producto fue modificado" });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      msj: "No se pudo modificar el producto",
    });
  }
};

export default cafeteriactrl;
