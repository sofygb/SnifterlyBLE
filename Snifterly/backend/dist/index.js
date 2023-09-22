"use strict";

var _app = _interopRequireDefault(require("./app.js"));
require("./database.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//importa la App

_app["default"].listen(3000);
console.log("server listening on port 3000");

//npm start dev para ejecutar el proyecto
//npm run build para crea todo el codigo compilado o transpirado en dist