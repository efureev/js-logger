import ConsoleDriver from '../ConsoleDriver'
import Message from '../../Message'

export interface ConsoleBufferConfig {
  print?: boolean
  printFragmented?: boolean
  debugFn?: Function
}

export default class ConsoleBuffer extends ConsoleDriver {
  private readonly print: boolean = false
  private readonly printFragmented: boolean = false
  private readonly debugFn: Function

  constructor({ print, printFragmented, debugFn }: ConsoleBufferConfig = {}) {
    super()
    this.print = print || false
    this.printFragmented = printFragmented || false
    this.debugFn = debugFn || this.output.dir
  }

  public buffer: string[] = []

  public performLines(lines: string[], type: string): string[] | void {
    this.buffer = [
      ...this.buffer,
      ...lines
    ]
  }

  protected perform(msg: Message, type: string): string[] | void {
    this.buffer = [
      ...this.buffer,
      ...ConsoleDriver.buildStrings(ConsoleDriver.formatMessage(msg))
    ]

    if (this.print) {
      const warnFunc = this.output.warn ? this.output.warn : this.output.log

      warnFunc('--[debug] start')

      const result = super.perform(msg, type)

      this.debugFn(this.buffer)
      if (this.printFragmented) {
        this.performFragmented()
      }
      warnFunc('--[debug] finish')
      if (this._returnResult) {
        return result
      }
    }
  }

  private performFragmented() {
    if (!this.buffer.length) {
      return
    }

    const fragments = this.buffer[0].split('%c').slice(1)
    const styles = this.buffer.slice(1)

    if (fragments.length != styles.length) {
      this.output.error('data inconsistency error: fragments: %d, styles: %d', fragments.length, styles.length)
      this.output.log('fragments', fragments)
      this.output.log('styles', styles)
    }

    fragments.forEach((fragment, idx) => {
      this.output.log(`${fragment}: ${styles[idx]}`)
      this.output.log(`%c${fragment}`, styles[idx])
    })
  }

  public clearBuffer() {
    this.buffer = []
  }
}
