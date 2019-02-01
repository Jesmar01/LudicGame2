//juegosSchema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const juegosSchema = new Schema({
  nombre: String,
  descripcion: String,
});

module.exports = mongoose.model("juegos",juegosSchema);
