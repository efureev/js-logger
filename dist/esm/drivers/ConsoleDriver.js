class ConsoleDriver {
  debug(msg) {
    this.perform(msg, 'debug');
  }

  info(msg) {
    this.perform(msg, 'info');
  }

  log(msg) {
    this.perform(msg, 'log');
  }

  error(msg) {
    this.perform(msg, 'error');
  }

  trace(msg) {
    this.perform(msg, 'trace');
  }

  perform(msg, type) {
    const lines = ConsoleDriver.buildStrings(ConsoleDriver.formatMessage(msg)); // @ts-ignore

    console[type](...lines); // console[msg.type ?? type](res[0], ...res[1])
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
//# sourceMappingURL=ConsoleDriver.js.map