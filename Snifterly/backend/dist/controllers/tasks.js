"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateEstadoMedicion = exports.setMediciones = exports.setJornadaDesactiva = exports.setJornadaActiva = exports.setFechaFinJornada = exports.setEstadoUsuario = exports.saveUsuario = exports.saveMedicion = exports.saveJornada = exports.getUsuariosCount = exports.getUsuarios = exports.getUsuarioById = exports.getUsuarioByEmailAndContrasenia = exports.getUsuarioByEmail = exports.getUltimaMedicionByIdJornada = exports.getUltimaMedicion = exports.getMedicionesFromIdJornada = exports.getMedicionesCountByIdJornada = exports.getMediciones = exports.getJornadas = exports.getJornadaRecienteByIdUsuario = exports.getJornadaById = exports.getJornadaActiva = exports.getFistFechaMedicionByIdJornada = exports.getAvgMedicionesByIdJornada = exports.getAllMedicionesByIdJornada = exports.deleteTask = exports.def = void 0;
var _database = require("../database.js");
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; } //archivo de tareas. este va a ser las funciones de las rutas
//Llama a la función para conectarme

var getUsuarios = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var connection, _yield$connection$que, _yield$connection$que2, rows;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _database.connect)();
        case 2:
          connection = _context.sent;
          _context.next = 5;
          return connection.query("SELECT * FROM Usuario");
        case 5:
          _yield$connection$que = _context.sent;
          _yield$connection$que2 = _slicedToArray(_yield$connection$que, 1);
          rows = _yield$connection$que2[0];
          //con el objeto de conexión hago la consulta
          res.json(rows);
          console.log(rows);
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getUsuarios(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.getUsuarios = getUsuarios;
var getJornadas = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var connection, _yield$connection$que3, _yield$connection$que4, rows;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0, _database.connect)();
        case 2:
          connection = _context2.sent;
          _context2.next = 5;
          return connection.query("SELECT * FROM Jornada");
        case 5:
          _yield$connection$que3 = _context2.sent;
          _yield$connection$que4 = _slicedToArray(_yield$connection$que3, 1);
          rows = _yield$connection$que4[0];
          res.json(rows);
          console.log(rows);
        case 10:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function getJornadas(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.getJornadas = getJornadas;
var setJornadaActiva = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var connection, _yield$connection$que5, _yield$connection$que6, rows;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return (0, _database.connect)();
        case 2:
          connection = _context3.sent;
          _context3.next = 5;
          return connection.query("INSERT INTO jornada(fechaInicio, fechaFin, idUsuario, activo) VALUES (NOW(),null,?,1)", [req.params.idUsuario]);
        case 5:
          _yield$connection$que5 = _context3.sent;
          _yield$connection$que6 = _slicedToArray(_yield$connection$que5, 1);
          rows = _yield$connection$que6[0];
          res.json(rows);
          console.log(rows);
        case 10:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function setJornadaActiva(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.setJornadaActiva = setJornadaActiva;
var setJornadaDesactiva = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var connection, _yield$connection$que7, _yield$connection$que8, rows;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return (0, _database.connect)();
        case 2:
          connection = _context4.sent;
          _context4.next = 5;
          return connection.query("UPDATE jornada SET activo = 0");
        case 5:
          _yield$connection$que7 = _context4.sent;
          _yield$connection$que8 = _slicedToArray(_yield$connection$que7, 1);
          rows = _yield$connection$que8[0];
          res.json(rows[0]);
          console.log(rows[0]);
        case 10:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function setJornadaDesactiva(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
exports.setJornadaDesactiva = setJornadaDesactiva;
var setFechaFinJornada = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var connection, _yield$connection$que9, _yield$connection$que10, rows;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return (0, _database.connect)();
        case 2:
          connection = _context5.sent;
          _context5.next = 5;
          return connection.query("UPDATE jornada SET fechaFin = NOW() WHERE idJornada = ?", [req.params.idJornada]);
        case 5:
          _yield$connection$que9 = _context5.sent;
          _yield$connection$que10 = _slicedToArray(_yield$connection$que9, 1);
          rows = _yield$connection$que10[0];
          res.json(rows[0]);
          console.log(rows[0]);
        case 10:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function setFechaFinJornada(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
exports.setFechaFinJornada = setFechaFinJornada;
var setMediciones = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var connection, _yield$connection$que11, _yield$connection$que12, rows;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return (0, _database.connect)();
        case 2:
          connection = _context6.sent;
          _context6.next = 5;
          return connection.query("INSERT INTO medicion(grado, fecha, idJornada, estado) VALUES (?,NOW(),?,null)", [req.params.grado, req.params.idJornada]);
        case 5:
          _yield$connection$que11 = _context6.sent;
          _yield$connection$que12 = _slicedToArray(_yield$connection$que11, 1);
          rows = _yield$connection$que12[0];
          res.json(rows);
          console.log(rows);
        case 10:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function setMediciones(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
exports.setMediciones = setMediciones;
var setEstadoUsuario = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var connection, _yield$connection$que13, _yield$connection$que14, rows;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return (0, _database.connect)();
        case 2:
          connection = _context7.sent;
          _context7.next = 5;
          return connection.query("UPDATE medicion SET estado = ? where idMedicion = ?", [req.params.estado, req.params.idMedicion]);
        case 5:
          _yield$connection$que13 = _context7.sent;
          _yield$connection$que14 = _slicedToArray(_yield$connection$que13, 1);
          rows = _yield$connection$que14[0];
          res.json(rows[0]);
          console.log(rows[0]);
        case 10:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return function setEstadoUsuario(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();
exports.setEstadoUsuario = setEstadoUsuario;
var getMediciones = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var connection, _yield$connection$que15, _yield$connection$que16, rows;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return (0, _database.connect)();
        case 2:
          connection = _context8.sent;
          _context8.next = 5;
          return connection.query("SELECT * FROM Medicion");
        case 5:
          _yield$connection$que15 = _context8.sent;
          _yield$connection$que16 = _slicedToArray(_yield$connection$que15, 1);
          rows = _yield$connection$que16[0];
          res.json(rows);
          console.log(rows);
        case 10:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return function getMediciones(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();
exports.getMediciones = getMediciones;
var getUltimaMedicion = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var connection, _yield$connection$que17, _yield$connection$que18, rows;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return (0, _database.connect)();
        case 2:
          connection = _context9.sent;
          _context9.next = 5;
          return connection.query("SELECT * FROM `medicion` WHERE idJornada = ? ORDER BY fecha DESC LIMIT 1", [req.params.idJornada]);
        case 5:
          _yield$connection$que17 = _context9.sent;
          _yield$connection$que18 = _slicedToArray(_yield$connection$que17, 1);
          rows = _yield$connection$que18[0];
          res.json(rows[0]);
          console.log(rows[0]);
        case 10:
        case "end":
          return _context9.stop();
      }
    }, _callee9);
  }));
  return function getUltimaMedicion(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();
exports.getUltimaMedicion = getUltimaMedicion;
var getAllMedicionesByIdJornada = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var connection, _yield$connection$que19, _yield$connection$que20, rows;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return (0, _database.connect)();
        case 2:
          connection = _context10.sent;
          _context10.next = 5;
          return connection.query("SELECT * FROM `medicion` WHERE idJornada = ? ORDER BY fecha DESC LIMIT 1", [req.params.idJornada]);
        case 5:
          _yield$connection$que19 = _context10.sent;
          _yield$connection$que20 = _slicedToArray(_yield$connection$que19, 1);
          rows = _yield$connection$que20[0];
          res.json(rows[0]);
          console.log(rows[0]);
        case 10:
        case "end":
          return _context10.stop();
      }
    }, _callee10);
  }));
  return function getAllMedicionesByIdJornada(_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}();
exports.getAllMedicionesByIdJornada = getAllMedicionesByIdJornada;
var getUsuarioById = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res) {
    var connection, _yield$connection$que21, _yield$connection$que22, rows;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _context11.next = 2;
          return (0, _database.connect)();
        case 2:
          connection = _context11.sent;
          _context11.next = 5;
          return connection.query("SELECT * FROM Usuario WHERE idUsuario = ?", [req.params.idUsuario]);
        case 5:
          _yield$connection$que21 = _context11.sent;
          _yield$connection$que22 = _slicedToArray(_yield$connection$que21, 1);
          rows = _yield$connection$que22[0];
          res.json(rows[0]);
          console.log(rows[0]);
        case 10:
        case "end":
          return _context11.stop();
      }
    }, _callee11);
  }));
  return function getUsuarioById(_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}();
exports.getUsuarioById = getUsuarioById;
var getUsuarioByEmail = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(req, res) {
    var connection, _yield$connection$que23, _yield$connection$que24, rows;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          _context12.next = 2;
          return (0, _database.connect)();
        case 2:
          connection = _context12.sent;
          _context12.next = 5;
          return connection.query("SELECT * FROM Usuario WHERE email = ?", [req.params.email]);
        case 5:
          _yield$connection$que23 = _context12.sent;
          _yield$connection$que24 = _slicedToArray(_yield$connection$que23, 1);
          rows = _yield$connection$que24[0];
          res.json(rows[0]);
          console.log(rows[0]);
        case 10:
        case "end":
          return _context12.stop();
      }
    }, _callee12);
  }));
  return function getUsuarioByEmail(_x23, _x24) {
    return _ref12.apply(this, arguments);
  };
}();
exports.getUsuarioByEmail = getUsuarioByEmail;
var getUsuarioByEmailAndContrasenia = /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(req, res) {
    var connection, _yield$connection$que25, _yield$connection$que26, rows;
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          _context13.next = 2;
          return (0, _database.connect)();
        case 2:
          connection = _context13.sent;
          _context13.next = 5;
          return connection.query("SELECT * FROM Usuario WHERE email = ? AND contrasenia = ?", [req.params.email, req.params.contrasenia]);
        case 5:
          _yield$connection$que25 = _context13.sent;
          _yield$connection$que26 = _slicedToArray(_yield$connection$que25, 1);
          rows = _yield$connection$que26[0];
          res.json(rows[0]);
          console.log(rows[0]);
        case 10:
        case "end":
          return _context13.stop();
      }
    }, _callee13);
  }));
  return function getUsuarioByEmailAndContrasenia(_x25, _x26) {
    return _ref13.apply(this, arguments);
  };
}();
exports.getUsuarioByEmailAndContrasenia = getUsuarioByEmailAndContrasenia;
var getJornadaById = /*#__PURE__*/function () {
  var _ref14 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(req, res) {
    var connection, _yield$connection$que27, _yield$connection$que28, rows;
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          _context14.next = 2;
          return (0, _database.connect)();
        case 2:
          connection = _context14.sent;
          _context14.next = 5;
          return connection.query("SELECT * FROM Jornada WHERE idJornada = ?", [req.params.idJornada]);
        case 5:
          _yield$connection$que27 = _context14.sent;
          _yield$connection$que28 = _slicedToArray(_yield$connection$que27, 1);
          rows = _yield$connection$que28[0];
          res.json(rows[0]);
          console.log(rows[0]);
        case 10:
        case "end":
          return _context14.stop();
      }
    }, _callee14);
  }));
  return function getJornadaById(_x27, _x28) {
    return _ref14.apply(this, arguments);
  };
}();
exports.getJornadaById = getJornadaById;
var getJornadaRecienteByIdUsuario = /*#__PURE__*/function () {
  var _ref15 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(req, res) {
    var connection, _yield$connection$que29, _yield$connection$que30, rows;
    return _regeneratorRuntime().wrap(function _callee15$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          _context15.next = 2;
          return (0, _database.connect)();
        case 2:
          connection = _context15.sent;
          _context15.next = 5;
          return connection.query("SELECT * FROM Jornada WHERE idUsuario = ? ORDER BY fechaInicio DESC LIMIT 1", [req.params.idUsuario]);
        case 5:
          _yield$connection$que29 = _context15.sent;
          _yield$connection$que30 = _slicedToArray(_yield$connection$que29, 1);
          rows = _yield$connection$que30[0];
          res.json(rows[0]);
          console.log(rows[0]);
        case 10:
        case "end":
          return _context15.stop();
      }
    }, _callee15);
  }));
  return function getJornadaRecienteByIdUsuario(_x29, _x30) {
    return _ref15.apply(this, arguments);
  };
}();
exports.getJornadaRecienteByIdUsuario = getJornadaRecienteByIdUsuario;
var getJornadaActiva = /*#__PURE__*/function () {
  var _ref16 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(req, res) {
    var connection, _yield$connection$que31, _yield$connection$que32, rows;
    return _regeneratorRuntime().wrap(function _callee16$(_context16) {
      while (1) switch (_context16.prev = _context16.next) {
        case 0:
          _context16.next = 2;
          return (0, _database.connect)();
        case 2:
          connection = _context16.sent;
          _context16.next = 5;
          return connection.query("SELECT idJornada FROM Jornada WHERE activo = 1", []);
        case 5:
          _yield$connection$que31 = _context16.sent;
          _yield$connection$que32 = _slicedToArray(_yield$connection$que31, 1);
          rows = _yield$connection$que32[0];
          res.json(rows[0]["idJornada"]);
          console.log(rows[0]["idJornada"]);
        case 10:
        case "end":
          return _context16.stop();
      }
    }, _callee16);
  }));
  return function getJornadaActiva(_x31, _x32) {
    return _ref16.apply(this, arguments);
  };
}();
exports.getJornadaActiva = getJornadaActiva;
var getUsuariosCount = /*#__PURE__*/function () {
  var _ref17 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17(req, res) {
    var connection, _yield$connection$que33, _yield$connection$que34, rows;
    return _regeneratorRuntime().wrap(function _callee17$(_context17) {
      while (1) switch (_context17.prev = _context17.next) {
        case 0:
          _context17.next = 2;
          return (0, _database.connect)();
        case 2:
          connection = _context17.sent;
          _context17.next = 5;
          return connection.query("SELECT COUNT(*) FROM Usuario");
        case 5:
          _yield$connection$que33 = _context17.sent;
          _yield$connection$que34 = _slicedToArray(_yield$connection$que33, 1);
          rows = _yield$connection$que34[0];
          res.json(rows[0]["COUNT(*)"]);
          console.log(rows[0]["COUNT(*)"]);
        case 10:
        case "end":
          return _context17.stop();
      }
    }, _callee17);
  }));
  return function getUsuariosCount(_x33, _x34) {
    return _ref17.apply(this, arguments);
  };
}();
exports.getUsuariosCount = getUsuariosCount;
var getAvgMedicionesByIdJornada = /*#__PURE__*/function () {
  var _ref18 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18(req, res) {
    var connection, _yield$connection$que35, _yield$connection$que36, rows;
    return _regeneratorRuntime().wrap(function _callee18$(_context18) {
      while (1) switch (_context18.prev = _context18.next) {
        case 0:
          _context18.next = 2;
          return (0, _database.connect)();
        case 2:
          connection = _context18.sent;
          _context18.next = 5;
          return connection.query("SELECT TRUNCATE(AVG(grado), 2) FROM medicion WHERE idJornada = ?", [req.params.idJornada]);
        case 5:
          _yield$connection$que35 = _context18.sent;
          _yield$connection$que36 = _slicedToArray(_yield$connection$que35, 1);
          rows = _yield$connection$que36[0];
          res.json(rows[0]["TRUNCATE(AVG(grado), 2)"]);
          console.log(rows[0]["TRUNCATE(AVG(grado), 2)"]);
        case 10:
        case "end":
          return _context18.stop();
      }
    }, _callee18);
  }));
  return function getAvgMedicionesByIdJornada(_x35, _x36) {
    return _ref18.apply(this, arguments);
  };
}();
exports.getAvgMedicionesByIdJornada = getAvgMedicionesByIdJornada;
var getFistFechaMedicionByIdJornada = /*#__PURE__*/function () {
  var _ref19 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee19(req, res) {
    var connection, _yield$connection$que37, _yield$connection$que38, rows;
    return _regeneratorRuntime().wrap(function _callee19$(_context19) {
      while (1) switch (_context19.prev = _context19.next) {
        case 0:
          _context19.next = 2;
          return (0, _database.connect)();
        case 2:
          connection = _context19.sent;
          _context19.next = 5;
          return connection.query("SELECT fecha FROM medicion WHERE idJornada = ? ORDER BY fecha ASC LIMIT 1", [req.params.idJornada]);
        case 5:
          _yield$connection$que37 = _context19.sent;
          _yield$connection$que38 = _slicedToArray(_yield$connection$que37, 1);
          rows = _yield$connection$que38[0];
          res.json(rows[0]["fecha"]);
          console.log(rows[0]["fecha"]);
        case 10:
        case "end":
          return _context19.stop();
      }
    }, _callee19);
  }));
  return function getFistFechaMedicionByIdJornada(_x37, _x38) {
    return _ref19.apply(this, arguments);
  };
}();
exports.getFistFechaMedicionByIdJornada = getFistFechaMedicionByIdJornada;
var getMedicionesCountByIdJornada = /*#__PURE__*/function () {
  var _ref20 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee20(req, res) {
    var connection, _yield$connection$que39, _yield$connection$que40, rows;
    return _regeneratorRuntime().wrap(function _callee20$(_context20) {
      while (1) switch (_context20.prev = _context20.next) {
        case 0:
          _context20.next = 2;
          return (0, _database.connect)();
        case 2:
          connection = _context20.sent;
          _context20.next = 5;
          return connection.query("SELECT COUNT(*) FROM Medicion WHERE idJornada = ?", [req.params.idJornada]);
        case 5:
          _yield$connection$que39 = _context20.sent;
          _yield$connection$que40 = _slicedToArray(_yield$connection$que39, 1);
          rows = _yield$connection$que40[0];
          res.json(rows[0]["COUNT(*)"]);
          console.log(rows[0]["COUNT(*)"]);
        case 10:
        case "end":
          return _context20.stop();
      }
    }, _callee20);
  }));
  return function getMedicionesCountByIdJornada(_x39, _x40) {
    return _ref20.apply(this, arguments);
  };
}();
exports.getMedicionesCountByIdJornada = getMedicionesCountByIdJornada;
var getMedicionesFromIdJornada = /*#__PURE__*/function () {
  var _ref21 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee21(req, res) {
    var connection, _yield$connection$que41, _yield$connection$que42, rows;
    return _regeneratorRuntime().wrap(function _callee21$(_context21) {
      while (1) switch (_context21.prev = _context21.next) {
        case 0:
          _context21.next = 2;
          return (0, _database.connect)();
        case 2:
          connection = _context21.sent;
          _context21.next = 5;
          return connection.query("SELECT * FROM Medicion WHERE idJornada = ?", [req.params.idJornada]);
        case 5:
          _yield$connection$que41 = _context21.sent;
          _yield$connection$que42 = _slicedToArray(_yield$connection$que41, 1);
          rows = _yield$connection$que42[0];
          res.json(rows);
          console.log(rows);
        case 10:
        case "end":
          return _context21.stop();
      }
    }, _callee21);
  }));
  return function getMedicionesFromIdJornada(_x41, _x42) {
    return _ref21.apply(this, arguments);
  };
}();
exports.getMedicionesFromIdJornada = getMedicionesFromIdJornada;
var getUltimaMedicionByIdJornada = /*#__PURE__*/function () {
  var _ref22 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee22(req, res) {
    var connection, _yield$connection$que43, _yield$connection$que44, rows;
    return _regeneratorRuntime().wrap(function _callee22$(_context22) {
      while (1) switch (_context22.prev = _context22.next) {
        case 0:
          _context22.next = 2;
          return (0, _database.connect)();
        case 2:
          connection = _context22.sent;
          _context22.next = 5;
          return connection.query("SELECT * FROM Medicion WHERE idJornada = ? ORDER BY fecha DESC LIMIT 1", [req.params.idJornada]);
        case 5:
          _yield$connection$que43 = _context22.sent;
          _yield$connection$que44 = _slicedToArray(_yield$connection$que43, 1);
          rows = _yield$connection$que44[0];
          res.json(rows[0]);
          console.log(rows[0]);
        case 10:
        case "end":
          return _context22.stop();
      }
    }, _callee22);
  }));
  return function getUltimaMedicionByIdJornada(_x43, _x44) {
    return _ref22.apply(this, arguments);
  };
}();
exports.getUltimaMedicionByIdJornada = getUltimaMedicionByIdJornada;
var saveUsuario = /*#__PURE__*/function () {
  var _ref23 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee23(req, res) {
    var connection, result;
    return _regeneratorRuntime().wrap(function _callee23$(_context23) {
      while (1) switch (_context23.prev = _context23.next) {
        case 0:
          _context23.next = 2;
          return (0, _database.connect)();
        case 2:
          connection = _context23.sent;
          _context23.next = 5;
          return connection.query("INSERT INTO Usuario(nombre, fechaNacimiento, peso, altura, email, contrasenia, fechaCreacion, modResistencia) VALUES (?,?,?,?,?,?,NOW(),null)", [req.params.nombre, req.params.fechaNacimiento, req.params.peso, req.params.altura, req.params.email, req.params.contrasenia]);
        case 5:
          result = _context23.sent;
          res.json(result);
          console.log(result);
        case 8:
        case "end":
          return _context23.stop();
      }
    }, _callee23);
  }));
  return function saveUsuario(_x45, _x46) {
    return _ref23.apply(this, arguments);
  };
}();
exports.saveUsuario = saveUsuario;
var saveMedicion = /*#__PURE__*/function () {
  var _ref24 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee24(req, res) {
    var connection, result;
    return _regeneratorRuntime().wrap(function _callee24$(_context24) {
      while (1) switch (_context24.prev = _context24.next) {
        case 0:
          _context24.next = 2;
          return (0, _database.connect)();
        case 2:
          connection = _context24.sent;
          _context24.next = 5;
          return connection.query("INSERT INTO Medicion(grado, fecha, idJornada) VALUES (?,NOW(),?)", [req.params.grado, req.params.idJornada]);
        case 5:
          result = _context24.sent;
          res.json(result);
          console.log(result);
        case 8:
        case "end":
          return _context24.stop();
      }
    }, _callee24);
  }));
  return function saveMedicion(_x47, _x48) {
    return _ref24.apply(this, arguments);
  };
}();
exports.saveMedicion = saveMedicion;
var saveJornada = /*#__PURE__*/function () {
  var _ref25 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee25(req, res) {
    var connection, nuevaJornada;
    return _regeneratorRuntime().wrap(function _callee25$(_context25) {
      while (1) switch (_context25.prev = _context25.next) {
        case 0:
          console.log(req.body);
          _context25.next = 3;
          return (0, _database.connect)();
        case 3:
          connection = _context25.sent;
          _context25.next = 6;
          return connection.query("INSERT INTO Jornada(fechaInicio, fechaFin, idUsuario, activo) VALUES (NOW(),?,?,1)", [null, req.params.idUsuario]);
        case 6:
          nuevaJornada = _context25.sent;
          res.json(nuevaJornada);
        case 8:
        case "end":
          return _context25.stop();
      }
    }, _callee25);
  }));
  return function saveJornada(_x49, _x50) {
    return _ref25.apply(this, arguments);
  };
}();
exports.saveJornada = saveJornada;
var deleteTask = /*#__PURE__*/function () {
  var _ref26 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee26(req, res) {
    return _regeneratorRuntime().wrap(function _callee26$(_context26) {
      while (1) switch (_context26.prev = _context26.next) {
        case 0:
          res.send("hello world");
        case 1:
        case "end":
          return _context26.stop();
      }
    }, _callee26);
  }));
  return function deleteTask(_x51, _x52) {
    return _ref26.apply(this, arguments);
  };
}();
exports.deleteTask = deleteTask;
var updateEstadoMedicion = /*#__PURE__*/function () {
  var _ref27 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee27(req, res) {
    return _regeneratorRuntime().wrap(function _callee27$(_context27) {
      while (1) switch (_context27.prev = _context27.next) {
        case 0:
          //PENDIENTE
          res.send("hello world");
        case 1:
        case "end":
          return _context27.stop();
      }
    }, _callee27);
  }));
  return function updateEstadoMedicion(_x53, _x54) {
    return _ref27.apply(this, arguments);
  };
}();
exports.updateEstadoMedicion = updateEstadoMedicion;
var def = /*#__PURE__*/function () {
  var _ref28 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee28(req, res) {
    return _regeneratorRuntime().wrap(function _callee28$(_context28) {
      while (1) switch (_context28.prev = _context28.next) {
        case 0:
          _context28.next = 2;
          return res.send("hello world");
        case 2:
        case "end":
          return _context28.stop();
      }
    }, _callee28);
  }));
  return function def(_x55, _x56) {
    return _ref28.apply(this, arguments);
  };
}();
exports.def = def;