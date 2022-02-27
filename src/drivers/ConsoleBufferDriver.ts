import {ConsoleDriver} from "./index";
import Message from "../Message";

class ConsoleBufferDriver extends ConsoleDriver {
  public buffer: string[] = []

  protected perform(msg: Message, type: string) {
    this.buffer = ConsoleBufferDriver.buildStrings(ConsoleBufferDriver.formatMessage(msg))
  }

  public clearBuffer() {
    this.buffer = []
  }
}

export default ConsoleBufferDriver
