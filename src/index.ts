import {LEVEL_ERROR} from "./LogLevel";
import Logger from './Logger'
import ConsoleDriver from "./drivers/ConsoleDriver";

const BrowserLogger = (level: number = LEVEL_ERROR) => new Logger({level: level, driver: new ConsoleDriver()})

export default Logger;

export {
  BrowserLogger
};
