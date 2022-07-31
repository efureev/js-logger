import { LEVEL_ERROR } from './LogLevel';
import Logger from './Logger';
import { ConsoleDriver } from './drivers';
import ColorCollection from './ColorCollection';
import colors from './Color';

const BrowserLogger = (level = LEVEL_ERROR) => new Logger({
  driver: new ConsoleDriver(),
  colors: new ColorCollection(colors),
  level: level
});

export { BrowserLogger };
//# sourceMappingURL=shorcuts.js.map