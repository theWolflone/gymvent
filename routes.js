var controllerGym = require("./controllerGym.js");
var controllerPersona = require("./users/controllerPersona.js");
module.exports = function (app) {
  var PersonaW = require("./users/persona");

  app.get("/gimnasio", function (req, res) {
    //localhost:8080
    console.log(req.query);
    PersonaW.find(
      { email: req.query.email, password: req.query.password },
      function (err, persona) {
        if (err) {
          res.send(err);
        } else {
          if (persona.length > 0) {
            res.sendfile("index.html"); //Cargar Unica de la vista
          } else {
            res.json("No andes Jakiando");
          }
        }
      }
    );
  });

  app.get("/lovelo", function (req, res) {
    res.sendfile("assets/fonts/Lovelo-Black.otf");
  });

  app.get("/gymventlogo", function (req, res) {
    res.sendfile("assets/GymventWhite.png");
  });

  app.get("/gymventlogoblue", function (req, res) {
    res.sendfile("assets/Gymvent.png");
  });

  // app.get("/gimnasio", function (req, res) {
  //   res.sendfile("index.html");
  // });
  app.get("/gimnasiocss", function (req, res) {
    res.sendfile("style.css");
  });
  app.get("/frontend", function (req, res) {
    res.sendfile("gymfrontend.js");
  });
  app.get("/calendariogym", function (req, res) {
    res.sendfile("calendariogym/calendario.html");
  });
  app.get("/calendariogymcss", function (req, res) {
    res.sendfile("calendariogym/calendario.css");
  });
  app.get("/tabla", function (req, res) {
    res.sendfile("tabla.html");
  });
  app.get("/tablacss", function (req, res) {
    res.sendfile("tabla.css");
  });
  app.get("/tablejs", function (req, res) {
    res.sendfile("table.js");
  });
  app.get("/usershtml", function (req, res) {
    res.sendfile("users/users.html");
  });
  app.get("/userscss", function (req, res) {
    res.sendfile("users/style.css");
  });
  app.get("/home", function (req, res) {
    res.sendfile("home.html");
  });
  app.get("/homecss", function (req, res) {
    res.sendfile("home.css");
  });
  app.get("/usersfrontjs", function (req, res) {
    res.sendfile("users/frontendPersona.js");
  });
  app.get("/login", function (req, res) {
    res.sendfile("users/login.html");
  });

  app.put("/api/nuevoevento", controllerGym.Guardar);
  app.delete("/api/eliminaevento", controllerGym.Eliminar);
  app.post("/api/modificaevento", controllerGym.Modificar);
  app.post("/api/eventosporannomes", controllerGym.Seleccionarpormesanno);
  app.post("/api/todosloseventos", controllerGym.Seleccionartodos);
  app.post("/api/eventosporid", controllerGym.Seleccionarporid);
  app.post("/api/addasistentes", controllerGym.addAsistentes);

  app.put("/api/nuevousuario", controllerPersona.Guardar);
  app.delete("/api/eliminausuario", controllerPersona.Eliminar);
  app.post("/api/modificausuario", controllerPersona.Modificar);
  app.post("/api/loginuser", controllerPersona.Login);
};
