var mongoose = require("mongoose");
module.exports = mongoose.model("Persona", {
  nombre: String,
  apellido: String,
  email: String,
  tipousuario: String,
  password: String,
  foto: String,
});
