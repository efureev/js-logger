import ConsoleBufferDriver from './drivers/ConsoleBufferDriver';
import { DEBUG, ERROR, INFO, LOG_ALL, stringToLevel, TRACE } from './LogLevel';
import Message from './Message';
import MessageBlock from './MessageBlock';
import { isEmptyObject, isObject, isString } from './utils';

class Logger {
  logLevel = LOG_ALL;

  constructor({
    driver,
    colors,
    level
  }) {
    this.driver = driver;
    this.colors = colors;

    if (level) {
      if (typeof level === 'string') {
        this.logLevel = stringToLevel(level);
      } else {
        this.logLevel = level;
      }
    }
  }

  setLogLevel(level) {
    this.logLevel = level;
  }

  addLogLevel(level) {
    this.logLevel |= level;
  }

  excludeLogLevel(level) {
    this.logLevel ^= level;
  }

  getDriver() {
    return this.driver;
  }

  setDriver(driver) {
    this.driver = driver;
    return this;
  }

  enableDebug({
    printFragmented,
    debugFn
  } = {}) {
    this.originDriver = this.driver;
    this.driver = new ConsoleBufferDriver({
      print: true,
      printFragmented,
      debugFn
    });
    return this;
  }

  disableDebug() {
    if (this.originDriver) {
      this.setDriver(this.originDriver);
      this.originDriver = undefined;
    }

    return this;
  }

  returnResult() {
    this.driver.returnResult();
    return this;
  }

  getColors() {
    return this.colors;
  }

  shouldLog(level) {
    if (typeof level === 'string') {
      level = stringToLevel(level);
    }

    return (this.logLevel & level) !== 0;
  }

  log(msgText, prefix, offset = 0) {
    return this.driver.log(this.buildMessage(msgText, prefix, offset));
  }

  info(msgText, prefix, offset = 0) {
    if (!this.shouldLog(INFO)) {
      return;
    }

    const msg = this.buildMessage(msgText, prefix, offset);
    return this.driver.info(msg);
  }

  debug(msgText, prefix, offset = 0) {
    if (!this.shouldLog(DEBUG)) {
      return;
    }

    return this.driver.debug(this.buildMessage(msgText, prefix, offset));
  }

  error(msgText, prefix, error, offset = 0) {
    if (!this.shouldLog(ERROR)) {
      return;
    }

    if (error instanceof Error && error.stack && isString(error.stack)) {
      const lines = error.stack.split('\n');
      this.groupCollapsed(this.buildMessage(msgText, prefix, offset), lines);
      return;
    }

    return this.driver.error(this.buildMessage(msgText, prefix, offset));
  }

  groupCollapsed(msgText, lines = [], listLogFn = 'log') {
    this.driver.groupCollapsed(this.buildMessage(msgText));
    lines.forEach(line => {
      this.driver.performLines([line], listLogFn);
    });
    this.driver.groupEnd();
  }

  trace(msgText, prefix, offset = 0) {
    if (!this.shouldLog(TRACE)) {
      return;
    }

    return this.driver.trace(this.buildMessage(msgText, prefix, offset));
  }
  /**
   * @deprecated
   * @use panels
   */


  panel(panelText, {
    bgColor,
    color,
    offset
  } = Object.create(null), baseText, logLevel) {
    if (logLevel && !this.shouldLog(logLevel)) {
      return;
    }

    const msg = Message.instance(undefined, this.colors).pushBlock(MessageBlock.instance(panelText, {
      colors: this.colors
    }).background(bgColor || 'white').color(color || 'gray').offsetLeft(offset || 0).borderRadius(3).padding(2, 4), baseText ? MessageBlock.instance(baseText, {
      colors: this.colors
    }).offsetLeft(1) : null);
    return this.driver.log(msg);
  }

  panels(logLevel, ...blockConfigs) {
    if (!blockConfigs.length || logLevel && !this.shouldLog(logLevel)) {
      return;
    }

    const blocks = [];
    blockConfigs.forEach(blockConfig => {
      if (isString(blockConfig) && blockConfig !== '' || isObject(blockConfig) && !isEmptyObject(blockConfig)) {
        blocks.push(MessageBlock.instance(blockConfig, {
          colors: this.colors
        }));
      }
    });

    if (!blocks.length) {
      return;
    }

    const msg = Message.instance().pushBlock(...blocks);
    return this.driver.log(msg);
  }

  buildMessage(msgText, prefix, offset = 0) {
    if (msgText instanceof Message) {
      return msgText;
    }

    const msg = new Message(undefined, this.colors);

    if (prefix) {
      const block = MessageBlock.instance(prefix, {
        colors: this.colors
      }).offsetRight(1);

      if (offset) {
        block.offsetLeft(offset);
      }

      msg.pushBlock(block);
    }

    msg.pushBlock(MessageBlock.instance(msgText, {
      colors: this.colors
    }));
    return msg;
  }

}

export default Logger;
//# sourceMappingURL=Logger.js.map