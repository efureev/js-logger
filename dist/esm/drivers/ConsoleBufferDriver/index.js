import ConsoleDriver from '../ConsoleDriver';

class ConsoleBuffer extends ConsoleDriver {
  buffer = [];

  perform(msg, type) {
    this.buffer = ConsoleDriver.buildStrings(ConsoleDriver.formatMessage(msg));
  }

  clearBuffer() {
    this.buffer = [];
  }

}

export default ConsoleBuffer;
//# sourceMappingURL=index.js.map