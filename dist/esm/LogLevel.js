export const ERROR = 1;
export const INFO = 2;
export const DEBUG = 4;
export const TRACE = 8;
export const LEVEL_ERROR = ERROR;
export const LEVEL_INFO = LEVEL_ERROR | INFO;
export const LEVEL_DEBUG = LEVEL_INFO | DEBUG;
export const LEVEL_TRACE = LEVEL_DEBUG | TRACE;
export const LOG_ALL = LEVEL_TRACE;
export const ERROR_STR = 'error';
export const INFO_STR = 'info';
export const DEBUG_STR = 'debug';
export const TRACE_STR = 'trace';
export const LEVEL_INFO_STR = 'levelInfo';
export const LEVEL_DEBUG_STR = 'levelDebug';
export function stringToLevel(value) {
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