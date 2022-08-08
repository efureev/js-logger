import Message from '../Message'

export interface LoggerDriver {
  debug(msg: Message): string[] | void

  info(msg: Message): string[] | void

  log(msg: Message): string[] | void

  error(msg: Message): string[] | void

  trace(msg: Message): string[] | void

  returnResult(): this
}
