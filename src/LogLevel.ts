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
