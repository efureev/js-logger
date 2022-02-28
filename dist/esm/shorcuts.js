import { LEVEL_ERROR } from './LogLevel';
import Logger from './Logger';
import { ConsoleDriver } from './drivers';

const BrowserLogger = (level = LEVEL_ERROR) => new Logger({
  level: level,
  driver: new ConsoleDriver()
});

export { BrowserLogger };
//# sourceMappingURL=shorcuts.js.map