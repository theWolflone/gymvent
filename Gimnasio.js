var mongoose = require('mongoose');
var Schema = mongoose.Schema; // => Declaramos con mongoose que vamos a realizar un esquema, donde vamos a declarar todo lo que vamos a utilizar en nuestra base de datos.
var Gimnasio = new Schema({
      NOMBRE: String,
      DESCRIPCION: String,
      TIPOEVENTO: String,
      FECHA: Date,
      HORAINICIO: String,
      DURACION: String,
      ASISTENTES: [String],
      IMAGEN: String
});
module.exports = mongoose.model('Gimnasio', Gimnasio); // => Exportamos nuestro esquema para poder utilizarlo en el resto de nuestro proyecto.