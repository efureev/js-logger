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

  perform(msg, type) {
    this.buffer = ConsoleDriver.buildStrings(ConsoleDriver.formatMessage(msg));

    if (this.print) {
      this.output.warn('--[debug] start');
      super.perform(msg, type);
      this.debugFn(this.buffer);

      if (this.printFragmented) {
        this.performFragmented();
      }

      this.output.warn('--[debug] finish');
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