"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TRACE_STR = exports.TRACE = exports.LOG_ALL = exports.LEVEL_TRACE = exports.LEVEL_INFO_STR = exports.LEVEL_INFO = exports.LEVEL_ERROR = exports.LEVEL_DEBUG_STR = exports.LEVEL_DEBUG = exports.INFO_STR = exports.INFO = exports.ERROR_STR = exports.ERROR = exports.DEBUG_STR = exports.DEBUG = void 0;
exports.stringToLevel = stringToLevel;
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
var ERROR_STR = 'error';
exports.ERROR_STR = ERROR_STR;
var INFO_STR = 'info';
exports.INFO_STR = INFO_STR;
var DEBUG_STR = 'debug';
exports.DEBUG_STR = DEBUG_STR;
var TRACE_STR = 'trace';
exports.TRACE_STR = TRACE_STR;
var LEVEL_INFO_STR = 'levelInfo';
exports.LEVEL_INFO_STR = LEVEL_INFO_STR;
var LEVEL_DEBUG_STR = 'levelDebug';
exports.LEVEL_DEBUG_STR = LEVEL_DEBUG_STR;

function stringToLevel(value) {
  switch (value) {
    case ERROR_STR:
      return ERROR;

    case INFO_STR:
      return INFO;

    case DEBUG_STR:
      return DEBUG;

    case TRACE_STR:
      return TRACE;

    case LEVEL_INFO_STR:
      return LEVEL_INFO;

    case LEVEL_DEBUG_STR:
      return LEVEL_DEBUG;
  }

  return LOG_ALL;
}

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