import mongoose from "mongoose";

// const url = 'mongodb://localhost:27017/cafeteria';
const url =
  "mongodb+srv://pato:pato@cluster0.srt8q.mongodb.net/cafeteriaCrud";

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const conexion = mongoose.connection;

conexion.once("open", () => {
  console.log("DB conectada");
});
