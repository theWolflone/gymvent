class Gimnasio {
  constructor(
    _id,
    NOMBRE,
    DESCRIPCION,
    TIPOEVENTO,
    FECHA,
    HORAINICIO,
    DURACION,
    ASISTENTES,
    IMAGEN
  ) {
    this._id = _id;
    this.NOMBRE = NOMBRE;
    this.DESCRIPCION = DESCRIPCION;
    this.TIPOEVENTO = TIPOEVENTO;
    this.FECHA = FECHA;
    this.HORAINICIO = HORAINICIO;
    this.DURACION = DURACION;
    this.ASISTENTES = ASISTENTES;
    this.IMAGEN = IMAGEN;
  }

  Guardar() {
    var objetoAenviar = this;
    return new Promise(function (resolve, reject) {
      try {
        var xhr = new XMLHttpRequest();
        xhr.open("PUT", "/api/nuevoevento");
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
        xhr.open("DELETE", "/api/eliminaevento");
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
        xhr.open("POST", "/api/modificaevento");
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

  Seleccionarpormesanno() {
    var objetoAenviar = this;
    return new Promise(function (resolve, reject) {
      try {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "/api/eventosporannomes");
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.onload = function () {
          if (xhr.status == 200) {
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

  addAsistentes() {
    var objetoAenviar = this;
    return new Promise(function (resolve, reject) {
      try {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "/api/addasistentes");
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.onload = function () {
          if (xhr.status == 200) {
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
  Seleccionartodos() {
    var objetoAenviar = this;
    return new Promise(function (resolve, reject) {
      try {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "/api/todosloseventos");
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
