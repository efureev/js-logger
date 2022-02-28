import { ConsoleDriver } from './index';

class ConsoleBufferDriver extends ConsoleDriver {
  buffer = [];

  perform(msg, type) {
    this.buffer = ConsoleBufferDriver.buildStrings(ConsoleBufferDriver.formatMessage(msg));
  }

  clearBuffer() {
    this.buffer = [];
  }

}

export default ConsoleBufferDriver;
//# sourceMappingURL=ConsoleBufferDriver.js.map