import ConsoleDriver from '../ConsoleDriver'
import Message from '../../Message'

class ConsoleBuffer extends ConsoleDriver {
  public buffer: string[] = []

  protected perform(msg: Message, type: string) {
    this.buffer = ConsoleDriver.buildStrings(ConsoleDriver.formatMessage(msg))
  }

  public clearBuffer() {
    this.buffer = []
  }
}

export default ConsoleBuffer
