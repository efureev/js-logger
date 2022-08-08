import Message from '../../Message'
import MessageBlock from '../../MessageBlock'
import { LoggerDriver } from '../LoggerDriver'

export interface FormatConsole {
  fmtStr: string
  fmtArgs: Array<string>
}

class ConsoleDriver implements LoggerDriver {
  protected _returnResult: boolean = false
  protected output: Console = console

  debug(msg: Message): string[] | void {
    return this.perform(msg, 'debug')
  }

  info(msg: Message): string[] | void {
    return this.perform(msg, 'info')
  }

  log(msg: Message): string[] | void {
    return this.perform(msg, 'log')
  }

  error(msg: Message): string[] | void {
    return this.perform(msg, 'error')
  }

  trace(msg: Message): string[] | void {
    return this.perform(msg, 'trace')
  }

  groupCollapsed(msg: Message): string[] | void {
    return this.perform(msg, 'groupCollapsed')
  }

  groupEnd(): void {
    return this.output.groupEnd()
  }

  protected perform(msg: Message, type: string): string[] | void {
    const lines = ConsoleDriver.buildStrings(ConsoleDriver.formatMessage(msg))

    return this.performLines(lines, type)
  }


  public performLines(lines: string[], type: string): string[] | void {
    if (!this._returnResult) {
      // @ts-ignore
      this.output[type] ? this.output[type](...lines) : this.output.log(...lines)
      return
    }

    this._returnResult = false
    return lines
  }

  public returnResult(): this {
    this._returnResult = true

    return this
  }

  protected static buildStrings(fmt: FormatConsole): Array<string> {
    return [fmt.fmtStr, ...fmt.fmtArgs]
  }

  protected static formatMessage(msg: Message): FormatConsole {
    let fmtStr: string = ''
    const fmtArgs: Array<string> = []

    msg.getBlocks().forEach(block => {
      const { fmtStr: str, fmtArgs: args } = ConsoleDriver.formatBlock(block)
      fmtStr += str
      fmtArgs.push(...args)
    })

    return { fmtStr, fmtArgs }
  }

  protected static formatBlock(block: MessageBlock): FormatConsole {
    let fmtStr: string = `%c${block.getText()}`
    const fmtArgs: Array<string> = []
    let strStyle = ''

    const style = block.getStyle()
    for (const keyStyle in style) {
      strStyle += `${keyStyle}:${style[keyStyle]};`
    }
    fmtArgs.push(strStyle)

    return { fmtStr, fmtArgs }
  }
}

export default ConsoleDriver
