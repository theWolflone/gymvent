class Persona {
  constructor(_id, nombre, apellido, email, tipousuario, password, foto) {
    this._id = _id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.tipousuario = tipousuario;
    this.password = password;
    this.foto = foto;
  }

  Guardar() {
    var objetoAenviar = this;
    return new Promise(function (resolve, reject) {
      try {
        var xhr = new XMLHttpRequest();
        xhr.open("PUT", "/api/nuevousuario");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = function () {
          if (xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText));
          } else {
            reject(xhr);
          }
        };
        xhr.send(JSON.stringify(objetoAenviar));
      } catch (err) {
        reject(err.message);
      }
    });
  }

  // Función para eliminar operaciones específicas de la base de datos.
  Eliminar() {
    var objetoAenviar = this;
    return new Promise(function (resolve, reject) {
      try {
        var xhr = new XMLHttpRequest();
        xhr.open("DELETE", "/api/eliminausuario");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = function () {
          if (xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText));
          } else {
            reject(xhr);
          }
        };
        xhr.send(JSON.stringify(objetoAenviar));
      } catch (err) {
        reject(err.message);
      }
    });
  }

  // Función para modificar las operaciones de la base de datos.
  Modificar() {
    var objetoAenviar = this;
    return new Promise(function (resolve, reject) {
      try {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "/api/modificausuario");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = function () {
          if (xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText));
          } else {
            reject(xhr);
          }
        };
        xhr.send(JSON.stringify(objetoAenviar));
      } catch (err) {
        reject(err.message);
      }
    });
  }

  Login() {
    var objetoAenviar = this;
    return new Promise(function (resolve, reject) {
      try {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "/api/loginuser");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = function () {
          if (xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText));
          } else {
            reject(xhr);
          }
        };
        xhr.send(JSON.stringify(objetoAenviar));
      } catch (err) {
        reject(err.message);
      }
    });
  }

  Seleccionarporid() {
    var objetoAenviar = this;
    return new Promise(function (resolve, reject) {
      try {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "/api/eventosporid");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = function () {
          if (xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText));
          } else {
            reject(xhr);
          }
        };
        xhr.send(JSON.stringify(objetoAenviar));
      } catch (err) {
        reject(err.message);
      }
    });
  }
}
