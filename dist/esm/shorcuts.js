import { LEVEL_ERROR } from "./LogLevel";
import Logger from "./Logger";
import { ConsoleDriver } from "./drivers";
export const BrowserLogger = (level = LEVEL_ERROR) => new Logger({
  level: level,
  driver: new ConsoleDriver()
});
//# sourceMappingURL=shorcuts.js.map