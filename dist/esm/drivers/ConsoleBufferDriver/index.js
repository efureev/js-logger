import ConsoleDriver from '../ConsoleDriver';
export default class ConsoleBuffer extends ConsoleDriver {
  print = false;
  printFragmented = false;

  constructor({
    print,
    printFragmented,
    debugFn
  } = {}) {
    super();
    this.print = print || false;
    this.printFragmented = printFragmented || false;
    this.debugFn = debugFn || this.output.dir;
  }

  buffer = [];

  performLines(lines, type) {
    this.buffer = [...this.buffer, ...lines];
  }

  perform(msg, type) {
    this.buffer = [...this.buffer, ...ConsoleDriver.buildStrings(ConsoleDriver.formatMessage(msg))];

    if (this.print) {
      const warnFunc = this.output.warn ? this.output.warn : this.output.log;
      warnFunc('--[debug] start');
      const result = super.perform(msg, type);
      this.debugFn(this.buffer);

      if (this.printFragmented) {
        this.performFragmented();
      }

      warnFunc('--[debug] finish');

      if (this._returnResult) {
        return result;
      }
    }
  }

  performFragmented() {
    if (!this.buffer.length) {
      return;
    }

    const fragments = this.buffer[0].split('%c').slice(1);
    const styles = this.buffer.slice(1);

    if (fragments.length != styles.length) {
      this.output.error('data inconsistency error: fragments: %d, styles: %d', fragments.length, styles.length);
      this.output.log('fragments', fragments);
      this.output.log('styles', styles);
    }

    fragments.forEach((fragment, idx) => {
      this.output.log(`${fragment}: ${styles[idx]}`);
      this.output.log(`%c${fragment}`, styles[idx]);
    });
  }

  clearBuffer() {
    this.buffer = [];
  }

}
//# sourceMappingURL=index.js.map