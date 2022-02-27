import Message from "../Message";

export interface LoggerDriver {
  debug(msg: Message): void

  info(msg: Message): void

  log(msg: Message): void

  error(msg: Message): void

  trace(msg: Message): void
}
