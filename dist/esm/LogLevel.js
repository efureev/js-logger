export const ERROR = 1;
export const INFO = 2;
export const DEBUG = 4;
export const TRACE = 8;
export const LEVEL_ERROR = ERROR;
export const LEVEL_INFO = LEVEL_ERROR | INFO;
export const LEVEL_DEBUG = LEVEL_INFO | DEBUG;
export const LEVEL_TRACE = LEVEL_DEBUG | TRACE;
export const LOG_ALL = LEVEL_TRACE;
export default {
  ERROR,
  INFO,
  DEBUG,
  TRACE,
  LEVEL_ERROR,
  LEVEL_INFO,
  LEVEL_DEBUG,
  LEVEL_TRACE,
  LOG_ALL
};
//# sourceMappingURL=LogLevel.js.map