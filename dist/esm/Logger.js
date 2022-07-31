import { DEBUG, ERROR, INFO, LOG_ALL, TRACE } from './LogLevel';
import Message from './Message';
import MessageBlock from './MessageBlock';

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
      this.logLevel = level;
    }
  }

  setLevel(level) {
    this.logLevel = level;
  }

  getDriver() {
    return this.driver;
  }

  getColors() {
    return this.colors;
  }

  shouldLog(msgLevel) {
    return (this.logLevel & msgLevel) !== 0;
  }

  log(msgText, prefix, offset = 0) {
    this.driver.log(this.buildMessage(msgText, prefix, offset));
  }

  info(msgText, prefix, offset = 0) {
    if (!this.shouldLog(INFO)) {
      return;
    }

    const msg = this.buildMessage(msgText, prefix, offset);
    this.driver.info(msg);
  }

  debug(msgText, prefix, offset = 0) {
    if (!this.shouldLog(DEBUG)) {
      return;
    }

    this.driver.debug(this.buildMessage(msgText, prefix, offset));
  }

  error(msgText, prefix, offset = 0) {
    if (!this.shouldLog(ERROR)) {
      return;
    }

    this.driver.error(this.buildMessage(msgText, prefix, offset));
  }

  trace(msgText, prefix, offset = 0) {
    if (!this.shouldLog(TRACE)) {
      return;
    }

    this.driver.trace(this.buildMessage(msgText, prefix, offset));
  }

  panel(panelText, {
    bgColor,
    color,
    offset
  } = {}, baseText) {
    const msg = Message.instance(undefined, this.colors).pushBlock(MessageBlock.instance(panelText, {
      colors: this.colors
    }).background(bgColor || 'white').color(color || 'gray').offsetLeft(offset || 0).borderRadius(3).padding(2, 4), baseText ? MessageBlock.instance(baseText, {
      colors: this.colors
    }).offsetLeft(1) : null);
    this.driver.log(msg);
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