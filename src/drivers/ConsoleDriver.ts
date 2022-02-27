/*
export const STYLE_INFO = 'color: white; background:blue; padding: 2px 5px;'
export const STYLE_PURPLE = 'color: white; background:purple; padding: 2px 5px;'

export const map = {
  info: STYLE_INFO,
  purple: STYLE_PURPLE,
}
*/

import Message from "../Message";
import MessageBlock from "../MessageBlock";
import {LoggerDriver} from "./LoggerDriver";

export interface FormatConsole {
  fmtStr: string
  fmtArgs: Array<string>
}

class ConsoleDriver implements LoggerDriver {
  debug(msg: Message): void {
    this.perform(msg, 'debug')
  }

  info(msg: Message): void {
    this.perform(msg, 'info')
  }

  log(msg: Message): void {
    this.perform(msg, 'log')
  }

  error(msg: Message): void {
    this.perform(msg, 'error')
  }

  trace(msg: Message): void {
    this.perform(msg, 'trace')
  }

  protected perform(msg: Message, type: string) {
    const lines = ConsoleDriver.buildStrings(ConsoleDriver.formatMessage(msg))

    // @ts-ignore
    console[type](...lines)
    // console[msg.type ?? type](res[0], ...res[1])
  }

  protected static buildStrings(fmt: FormatConsole): Array<string> {
    return [fmt.fmtStr, ...fmt.fmtArgs]
  }

  protected static formatMessage(msg: Message): FormatConsole {
    let fmtStr: string = ''
    const fmtArgs: Array<string> = []

    msg.getBlocks().forEach(
      (block) => {
        const {fmtStr: str, fmtArgs: args} = ConsoleDriver.formatBlock(block)
        fmtStr += str
        fmtArgs.push(...args)
      }
    )

    return {fmtStr, fmtArgs}
  }

  protected static formatBlock(block: MessageBlock): FormatConsole {
    let fmtStr: string = ''
    const fmtArgs: Array<string> = []

    if (block.hasStyle()) {
      fmtStr += '%c'

      const style = block.getStyle()
      let strStyle = ''
      for (const keyStyle in style) {
        strStyle += `${keyStyle}:${style[keyStyle]};`
      }
      fmtArgs.push(strStyle)
    }

    fmtStr += '%s'
    fmtArgs.push(block.getText())

    return {fmtStr, fmtArgs}
  }

}

export default ConsoleDriver
