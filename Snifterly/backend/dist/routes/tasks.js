"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _tasks = require("../controllers/tasks.js");
//archivo de tareas. este va a ser las rutas

var router = (0, _express.Router)(); //devuelve lo que se ejecuta en una constante. Router nos permite definir las urls

/**
 * @swagger
 * tags: 
 *  name: Tasks
 *  description: Tasks endpoint
 */

/** 
 * @swagger
 * /usuarios:
 *  get:
 *    summary: Trae todos los usuarios
 *    tags: [Tasks]
 */
router.get("/usuarios", _tasks.getUsuarios); //get todas las tareas

/** 
 * @swagger
 * /medicionEstado/:idMedicion/:estado:
 *  put:
 *    summary: set estado usuario
 *    tags: [Tasks]
 */
router.put("/medicionEstado/:idMedicion/:estado", _tasks.setEstadoUsuario);

/** 
 * @swagger
 * /jornadaActual/:idJornada:
 *  put:
 *    summary: update fechaFin
 *    tags: [Tasks]
 */
router.put("/jornadaActual/:idJornada", _tasks.setFechaFinJornada);

/**
 * @swagger
 * tags: 
 *  name: Tasks
 *  description: Tasks endpoint
 */

/** 
 * @swagger
 * /jornadas:
 *  get:
 *    summary: Trae todas las jornadas
 *    tags: [Tasks]
 */
router.get("/jornadas", _tasks.getJornadas); //get todas las jornadas

/** 
 * @swagger
 * /jornadaActiva:
 *  get:
 *    summary: Trae la jornada activa
 *    tags: [Tasks]
 */
router.get("/jornadaActiva", _tasks.getJornadaActiva); //get jornada activa

/** 
 * @swagger
 * /jornadaActiva:
 *  get:
 *    summary: Trae la jornada activa
 *    tags: [Tasks]
 */
router.get("/jornadaReciente/:idUsuario", _tasks.getJornadaRecienteByIdUsuario); //get jornada activa

/** 
 * @swagger
 * /mediciones/:idJornada:
 *  get:
 *    summary: Trae la cantidad de mediciones de una jornada
 *    tags: [Tasks]
 */
router.get("/mediciones/count/:idJornada", _tasks.getMedicionesCountByIdJornada);

/** 
 * @swagger
 * /mediciones/first/:idJornada:
 *  get:
 *    summary: Trae la primera medicion más de una jornada
 *    tags: [Tasks]
 */
router.get("/mediciones/first/:idJornada", _tasks.getFistFechaMedicionByIdJornada);

/** 
 * @swagger
 * /mediciones/last/:idJornada:
 *  get:
 *    summary: Trae la última medicion más de una jornada
 *    tags: [Tasks]
 */
router.get("/mediciones/last/:idJornada", _tasks.getUltimaMedicionByIdJornada);

/** 
 * @swagger
 * /ultimaMedicion:
 *  get:
 *    summary: Trae la última medición hecha
 *    tags: [Tasks]
 */
router.get("/ultimaMedicion/:idJornada", _tasks.getUltimaMedicion);

/** 
 * @swagger
 * /mediciones/avg/:idJornada:
 *  get:
 *    summary: Trae el promedio de todos los grados de las mediciones de una jornada 
 *    tags: [Tasks]
 */
router.get("/mediciones/avg/:idJornada", _tasks.getAvgMedicionesByIdJornada);

/**
 * @swagger
 * tags: 
 *  name: Tasks
 *  description: Tasks endpoint
 */

/** 
 * @swagger
 * /mediciones:
 *  get:
 *    summary: Trae todas las mediciones
 *    tags: [Tasks]
 */
router.get("/mediciones", _tasks.getMediciones); //get todas las mediciones

/** 
 * @swagger
 * /usuarios/count:
 *  get:
 *    summary: Trae la cantidad total de usuarios
 */
router.get("/usuarios/count", _tasks.getUsuariosCount); //get la cantidad de tareas

/** 
 * @swagger
 * /usuarios/:idUsuario:
 *  get:
 *    summary: Trae el usuario requerido por su id
 */
router.get("/usuarios/:idUsuario", _tasks.getUsuarioById); //get una tarea por su id

/** 
 * @swagger
 * /usuarios/:email/:contraseña:
 *  get:
 *    summary: Trae el usuario requerido por su email y contraseña
 */
router.get("/usuarios/:email", _tasks.getUsuarioByEmail); //NO FUNCIONA

/** 
 * @swagger
 * /usuarios/:email/:contraseña:
 *  get:
 *    summary: Trae el usuario requerido por su email y contraseña
 */
router.get("/getUsuario/:email/:contrasenia", _tasks.getUsuarioByEmailAndContrasenia);

/** 
 * @swagger
 * /jornadas/:idJornada:
 *  get:
 *    summary: Trae la jornada requerida por su id
 */
router.get("/jornadas/:idJornada", _tasks.getJornadaById); //get una jornada por su id

/** 
 * @swagger
 * //jornadas/count/:idJornada:
 *  get:
 *    summary: Trae la cantidad de mediciones de una jornada requerida por su id
 */
router.get("/jornadas/count/:idJornada", _tasks.getMedicionesFromIdJornada);

/** 
 * @swagger
 * /usuarioNuevo:
 *  post:
 *    summary: Crea un nuevo usuario
 */
router.post("/usuarioNuevo/:nombre/:fechaNacimiento/:peso/:altura/:email/:contrasenia", _tasks.saveUsuario); //crear una tarea

/** 
 * @swagger
 * /mediciones:
 *  post:
 *    summary: Crea una nueva medicion
 */
router.post("/medicion/:grado/:idJornada", _tasks.saveMedicion); //crear una medicion

/** 
 * @swagger
 * /jornada/:idUsuario
 *  post:
 *    summary: Crea una nueva jornada
 */
router.post("/jornada/:idUsuario", _tasks.saveJornada); //crear una nueva jornada

/** 
 * @swagger
 * /tasks/:id:
 *  delete:
 *    summary: Elimina el usuario por su id
 */
router["delete"]("/tasks/:id", _tasks.deleteTask); //delete una tarea por su id

/** 
 * @swagger
 * /jornadaDesactiva:   
 *  put:
 *    summary: el valor activo pasa a 0
 */
router.put("/jornadaDesactiva", _tasks.setJornadaDesactiva); //termina la jornada

/**
 * @swagger
 * /medicione/:grado/:idjornada
 *  post:
 *    summary: sube los datos de la nueva medición
 */
router.post("/newMedicion/:grado/:idJornada", _tasks.setMediciones); // nueva medición

/** 
 * @swagger
 * /tasks:
 *  put:
 *    summary: Actualiza un usuarios por su id
 */
//router.put("/tasks/:id", updateTask) //modificar una tarea por su id

router.get("/def", _tasks.def);
var _default = router; //para probar las peticiones se puede utilizar un cliente rest como Postman. Instalar la extensión 'REST Client'
exports["default"] = _default;