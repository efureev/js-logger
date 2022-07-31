"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TRACE = exports.LOG_ALL = exports.LEVEL_TRACE = exports.LEVEL_INFO = exports.LEVEL_ERROR = exports.LEVEL_DEBUG = exports.INFO = exports.ERROR = exports.DEBUG = void 0;
var ERROR = 1;
exports.ERROR = ERROR;
var INFO = 2;
exports.INFO = INFO;
var DEBUG = 4;
exports.DEBUG = DEBUG;
var TRACE = 8;
exports.TRACE = TRACE;
var LEVEL_ERROR = ERROR;
exports.LEVEL_ERROR = LEVEL_ERROR;
var LEVEL_INFO = LEVEL_ERROR | INFO;
exports.LEVEL_INFO = LEVEL_INFO;
var LEVEL_DEBUG = LEVEL_INFO | DEBUG;
exports.LEVEL_DEBUG = LEVEL_DEBUG;
var LEVEL_TRACE = LEVEL_DEBUG | TRACE;
exports.LEVEL_TRACE = LEVEL_TRACE;
var LOG_ALL = LEVEL_TRACE;
exports.LOG_ALL = LOG_ALL;
var _default = {
  ERROR: ERROR,
  INFO: INFO,
  DEBUG: DEBUG,
  TRACE: TRACE,
  LEVEL_ERROR: LEVEL_ERROR,
  LEVEL_INFO: LEVEL_INFO,
  LEVEL_DEBUG: LEVEL_DEBUG,
  LEVEL_TRACE: LEVEL_TRACE,
  LOG_ALL: LOG_ALL
};
exports.default = _default;
//# sourceMappingURL=LogLevel.js.map