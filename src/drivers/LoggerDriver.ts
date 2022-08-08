import Message from '../Message'

export interface LoggerDriver {
  performLines(lines: string[], type: string): string[] | void

  debug(msg: Message): string[] | void

  info(msg: Message): string[] | void

  log(msg: Message): string[] | void

  error(msg: Message): string[] | void

  trace(msg: Message): string[] | void

  groupCollapsed(msg: Message): void

  groupEnd(): void

  returnResult(): this
}
