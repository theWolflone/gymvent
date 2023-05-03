var Item = require("./Gimnasio");

//Se realiza toda la solicitud para guardar un evento

exports.Guardar = function (req, res) {
  console.log(req.body);
  Item.create(
    {
      NOMBRE: req.body.NOMBRE,
      DESCRIPCION: req.body.DESCRIPCION,
      TIPOEVENTO: req.body.TIPOEVENTO,
      FECHA: req.body.FECHA,
      HORAINICIO: req.body.HORAINICIO,
      DURACION: req.body.DURACION,
      ASISTENTES: req.body.ASISTENTES,
      IMAGEN: req.body.IMAGEN,
    },
    function (err, item) {
      if (err) {
        res.send(err);
      } else {
        Item.find(function (err, item) {
          if (err) res.send(err);
          res.json(item);
        });
      }
    }
  );
};

//Se realiza toda la solicitud para modificar los eventos.
exports.Modificar = function (req, res) {
  Item.update(
    { _id: req.body._id },
    {
      $set: {
        NOMBRE: req.body.NOMBRE,
        DESCRIPCION: req.body.DESCRIPCION,
        TIPOEVENTO: req.body.TIPOEVENTO,
        FECHA: req.body.FECHA,
        HORAINICIO: req.body.HORAINICIO,
        DURACION: req.body.DURACION,
      },
    },
    function (err, item) {
      if (err) {
        res.send(err);
      } else {
        Item.find(function (err, item) {
          if (err) {
            res.send(err);
          }
          res.json(item);
        });
      }
    }
  );
};

exports.Eliminar = function (req, res) {
  Item.remove({ _id: req.body._id }, function (err, item) {
    if (err) {
      res.send(err);
      //Obtiene y devuelve todas las personas tras crear cada una de ellas
    } else {
      Item.find(function (err, item) {
        if (err) res.send(err);
        res.json(item);
      });
    }
  });
};
//Elimina un objeto específico.

module.exports.Seleccionartodos = function (req, res) {
  Item.find(function (err, item) {
    if (err) {
      res.send(err);
    } else {
      res.json(item);
    }
    //Devuelve todas las personas en JSON.
  });
};

module.exports.Seleccionarporid = function (req, res) {
  Item.find({ _id: req.body._id }, function (err, item) {
    if (err) {
      res.send(err);
    } else {
      res.json(item);
    }
    //Devuelve a todas las personas en JSON con el id.
  });
};

exports.Seleccionarporfecha = function (req, res) {};

exports.Seleccionarpornombre = function (req, res) {};

exports.Seleccionarpormesanno = function (req, res) {
  console.log(req.body);
  Item.find(function (err, item) {
    if (err) {
      res.send(err);
    } else {
      var vectorfiltrado = [];
      for (var elemento in item) {
        if (
          item[elemento].FECHA.getUTCMonth() + 1 == req.body.MES &&
          item[elemento].FECHA.getUTCFullYear() == req.body.ANNO
        ) {
          vectorfiltrado.push(item[elemento]);
        }
      }
      res.json(vectorfiltrado);
    }
  });
};


exports.addAsistentes = function (req, res) {
  Item.update(
    { _id: req.body._id },
    {
      $push: {
        ASISTENTES: req.body.ASISTENTES
      },
    },
    function (err, item) {
      if (err) {
        res.send(err);
      } else {
        Item.find(function (err, item) {
          if (err) {
            res.send(err);
          }
          res.json(item);
        });
      }
    }
  );
};

