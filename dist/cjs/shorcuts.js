"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BrowserLogger = void 0;

var _LogLevel = require("./LogLevel");

var _Logger = _interopRequireDefault(require("./Logger"));

var _drivers = require("./drivers");

var _ColorCollection = _interopRequireDefault(require("./ColorCollection"));

var _Color = _interopRequireDefault(require("./Color"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BrowserLogger = function BrowserLogger() {
  var level = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _LogLevel.LEVEL_ERROR;
  return new _Logger.default({
    driver: new _drivers.ConsoleDriver(),
    colors: new _ColorCollection.default(_Color.default),
    level: level
  });
};

exports.BrowserLogger = BrowserLogger;
//# sourceMappingURL=shorcuts.js.map