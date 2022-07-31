import type { LevelType } from './LogLevel'
import { LOG_ALL } from './LogLevel'
import Logger from './Logger'
import { ConsoleDriver } from './drivers'
import ColorCollection from './ColorCollection'
import colors from './Color'

const BrowserLogger = (level: LevelType = LOG_ALL) =>
  new Logger({
    driver: new ConsoleDriver(),
    colors: new ColorCollection(colors),
    level: level
  })

export { BrowserLogger }
