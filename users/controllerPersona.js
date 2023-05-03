var Item = require("./persona");

var crypto = require("crypto"),
  algorithm = "aes-256-ctr",
  password = "d6F3Efeq";

function encrypt(text) {
  var cipher = crypto.createCipher(algorithm, password);
  var crypted = cipher.update(text, "utf8", "hex");
  crypted += cipher.final("hex");
  return crypted;
}

function decrypt(text) {
  var decipher = crypto.createDecipher(algorithm, password);
  var dec = decipher.update(text, "hex", "utf8");
  dec += decipher.final("utf8");
  return dec;
}

//Se realiza toda la solicitud para guardar un evento

exports.Guardar = function (req, res) {
  console.log(req.body);
  Item.create(
    {
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      email: req.body.email,
      tipousuario: req.body.tipousuario,
      password: encrypt(req.body.password),
      foto: req.body.foto,
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
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email: req.body.email,
        tipousuario: req.body.tipousuario,
        password: req.body.password,
        foto: req.body.foto,
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

exports.Login = function (req, res) {
  Item.find(
    { email: req.body.email, password: encrypt(req.body.password) },
    function (err, persona) {
      if (err) {
        res.send(err);
      } else {
        if (persona.length > 0) {
          res.json(persona); //Devuelve todas las Personas en JSON
        } else {
          res.json("error");
        }
      }
    }
  );
};
