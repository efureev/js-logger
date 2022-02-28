import { LEVEL_DEBUG, LEVEL_ERROR, LEVEL_INFO, LEVEL_TRACE } from './LogLevel';
import Message from './Message';
import MessageBlock from './MessageBlock';

class Logger {
  logLevel = LEVEL_ERROR;

  constructor(config) {
    this.driver = config.driver;

    if (config.level) {
      this.logLevel = config.level;
    }
  }

  setLevel(level) {
    this.logLevel = level;
  }

  getDriver() {
    return this.driver;
  }

  shouldLog(msgLevel) {
    return this.logLevel <= msgLevel; // @todo: bit operations
  }

  log(msgText, prefix, offset = 0) {
    this.driver.log(Logger.buildMessage(msgText, prefix, offset));
  }

  info(msgText, prefix, offset = 0) {
    if (!this.shouldLog(LEVEL_INFO)) {
      return;
    }

    const msg = Logger.buildMessage(msgText, prefix, offset);
    this.driver.info(msg);
  }

  debug(msgText, prefix, offset = 0) {
    if (!this.shouldLog(LEVEL_DEBUG)) {
      return;
    }

    this.driver.debug(Logger.buildMessage(msgText, prefix, offset));
  }

  error(msgText, prefix, offset = 0) {
    if (!this.shouldLog(LEVEL_ERROR)) {
      return;
    }

    this.driver.error(Logger.buildMessage(msgText, prefix, offset));
  }

  trace(msgText, prefix, offset = 0) {
    if (!this.shouldLog(LEVEL_TRACE)) {
      return;
    }

    this.driver.trace(Logger.buildMessage(msgText, prefix, offset));
  }

  static buildMessage(msgText, prefix, offset = 0) {
    if (msgText instanceof Message) {
      return msgText;
    }

    const msg = new Message();

    if (prefix) {
      const block = MessageBlock.instance(prefix).offsetRight(1);

      if (offset) {
        block.offsetLeft(offset);
      }

      msg.pushBlock(block);
    }

    msg.pushBlock(MessageBlock.instance(msgText));
    return msg;
  }

}

export default Logger;
//# sourceMappingURL=Logger.js.map