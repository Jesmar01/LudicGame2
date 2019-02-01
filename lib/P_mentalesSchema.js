//juegosSchema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const P_mentalesSchema = new Schema({
  p_mental: String,
  descripcion: String,
});

module.exports = mongoose.model("P_mentales",P_mentalesSchema);
