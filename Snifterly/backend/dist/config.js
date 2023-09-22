"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = void 0;
require("dotenv/config");
var _dotenv = require("dotenv");
//configuración de la base de datos (Usuarios y contraseña). Arcivo que se exportará para la conexión de la base de datos

(0, _dotenv.config)();

/*
ASGURARSE DE TENER EL SIGUIENTE USUARIO:
process.env.SERVER || 'localhost'
process.env.USER || 'text'
process.env.PASSWORD || 'text'
process.env.DATABASE || 'SnifterlyDB'
*/

var config = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'snifterlydb'
};

//localhost:3000/docs
exports.config = config;