"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.options = void 0;
//configuración de swagger que se exportará
var options = {
  //Nombre de la API, qué carpetas va a leer, etc
  definition: {
    info: {
      title: "Snifterly API"
    }
  },
  apis: ['./src/routes/**/*.js']
};
exports.options = options;