import { LoggerDriver } from './drivers/LoggerDriver'
import { LEVEL_DEBUG, LEVEL_ERROR, LEVEL_INFO, LEVEL_TRACE } from './LogLevel'
import Message from './Message'
import MessageBlock from './MessageBlock'

export interface LoggerConfig {
  driver: LoggerDriver
  level?: number
}

class Logger {
  private readonly driver: LoggerDriver
  private logLevel: number = LEVEL_ERROR

  constructor(config: LoggerConfig) {
    this.driver = config.driver
    if (config.level) {
      this.logLevel = config.level
    }
  }

  setLevel(level: number): void {
    this.logLevel = level
  }

  public getDriver(): LoggerDriver {
    return this.driver
  }

  private shouldLog(msgLevel: number) {
    return this.logLevel <= msgLevel // @todo: bit operations
  }

  log(msgText: string | Message | MessageBlock, prefix?: string, offset = 0): void {
    this.driver.log(Logger.buildMessage(msgText, prefix, offset))
  }

  info(msgText: string, prefix?: string, offset = 0): void {
    if (!this.shouldLog(LEVEL_INFO)) {
      return
    }

    const msg = Logger.buildMessage(msgText, prefix, offset)

    this.driver.info(msg)
  }

  debug(msgText: string, prefix?: string, offset = 0) {
    if (!this.shouldLog(LEVEL_DEBUG)) {
      return
    }

    this.driver.debug(Logger.buildMessage(msgText, prefix, offset))
  }

  error(msgText: string, prefix?: string, offset = 0) {
    if (!this.shouldLog(LEVEL_ERROR)) {
      return
    }

    this.driver.error(Logger.buildMessage(msgText, prefix, offset))
  }

  trace(msgText: string, prefix?: string, offset = 0) {
    if (!this.shouldLog(LEVEL_TRACE)) {
      return
    }

    this.driver.trace(Logger.buildMessage(msgText, prefix, offset))
  }

  private static buildMessage(msgText: string | Message | MessageBlock, prefix?: string, offset: number = 0): Message {
    if (msgText instanceof Message) {
      return msgText
    }

    const msg = new Message()

    if (prefix) {
      const block = new MessageBlock(prefix)
      if (offset) {
        block.paddingLeft(offset)
      }

      msg.pushBlock(block)
    }

    msg.pushBlock(MessageBlock.instance(msgText))

    return msg
  }
}

export default Logger
