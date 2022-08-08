class ConsoleDriver {
  _returnResult = false;
  output = console;

  debug(msg) {
    return this.perform(msg, 'debug');
  }

  info(msg) {
    return this.perform(msg, 'info');
  }

  log(msg) {
    return this.perform(msg, 'log');
  }

  error(msg) {
    return this.perform(msg, 'error');
  }

  trace(msg) {
    return this.perform(msg, 'trace');
  }

  groupCollapsed(msg) {
    return this.perform(msg, 'groupCollapsed');
  }

  groupEnd() {
    return this.output.groupEnd();
  }

  perform(msg, type) {
    const lines = ConsoleDriver.buildStrings(ConsoleDriver.formatMessage(msg));
    return this.performLines(lines, type);
  }

  performLines(lines, type) {
    if (!this._returnResult) {
      // @ts-ignore
      this.output[type] ? this.output[type](...lines) : this.output.log(...lines);
      return;
    }

    this._returnResult = false;
    return lines;
  }

  returnResult() {
    this._returnResult = true;
    return this;
  }

  static buildStrings(fmt) {
    return [fmt.fmtStr, ...fmt.fmtArgs];
  }

  static formatMessage(msg) {
    let fmtStr = '';
    const fmtArgs = [];
    msg.getBlocks().forEach(block => {
      const {
        fmtStr: str,
        fmtArgs: args
      } = ConsoleDriver.formatBlock(block);
      fmtStr += str;
      fmtArgs.push(...args);
    });
    return {
      fmtStr,
      fmtArgs
    };
  }

  static formatBlock(block) {
    let fmtStr = `%c${block.getText()}`;
    const fmtArgs = [];
    let strStyle = '';
    const style = block.getStyle();

    for (const keyStyle in style) {
      strStyle += `${keyStyle}:${style[keyStyle]};`;
    }

    fmtArgs.push(strStyle);
    return {
      fmtStr,
      fmtArgs
    };
  }

}

export default ConsoleDriver;
//# sourceMappingURL=index.js.map