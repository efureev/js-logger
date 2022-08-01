export type LevelType = number

export const ERROR: LevelType = 1
export const INFO: LevelType = 2
export const DEBUG: LevelType = 4
export const TRACE: LevelType = 8

export const LEVEL_ERROR: LevelType = ERROR
export const LEVEL_INFO: LevelType = LEVEL_ERROR | INFO
export const LEVEL_DEBUG: LevelType = LEVEL_INFO | DEBUG
export const LEVEL_TRACE: LevelType = LEVEL_DEBUG | TRACE
export const LOG_ALL: LevelType = LEVEL_TRACE

export const ERROR_STR = 'error'
export const INFO_STR = 'info'
export const DEBUG_STR = 'debug'
export const TRACE_STR = 'trace'

export const LEVEL_INFO_STR = 'levelInfo'
export const LEVEL_DEBUG_STR = 'levelDebug'

export function stringToLevel(value: string): LevelType {
  switch (value) {
    case ERROR_STR:
      return ERROR
    case INFO_STR:
      return INFO
    case DEBUG_STR:
      return DEBUG
    case TRACE_STR:
      return TRACE

    case LEVEL_INFO_STR:
      return LEVEL_INFO
    case LEVEL_DEBUG_STR:
      return LEVEL_DEBUG
  }

  return LOG_ALL
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
  LOG_ALL,
}
