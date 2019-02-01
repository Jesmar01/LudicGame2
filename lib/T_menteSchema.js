//t_menteSchema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const T_menteSchema = new Schema({
  nombre: String,
  descripcion: String,
});

module.exports = mongoose.model("t_mente",T_menteSchema);
