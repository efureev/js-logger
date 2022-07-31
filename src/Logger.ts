import { LoggerDriver } from './drivers/LoggerDriver'
import type { LevelType } from './LogLevel'
import { DEBUG, ERROR, INFO, LOG_ALL, TRACE } from './LogLevel'
import Message from './Message'
import MessageBlock from './MessageBlock'
import { ColorValue } from './Color'
import ColorCollection from './ColorCollection'

export interface LoggerConfig {
  driver: LoggerDriver
  colors: ColorCollection
  level?: LevelType
}

interface PanelOptions {
  bgColor?: ColorValue
  color?: ColorValue
  offset?: number
}

class Logger {
  private readonly driver: LoggerDriver
  private readonly colors: ColorCollection

  private logLevel: LevelType = LOG_ALL

  constructor({ driver, colors, level }: LoggerConfig) {
    this.driver = driver
    this.colors = colors

    if (level) {
      this.logLevel = level
    }
  }

  setLevel(level: LevelType): void {
    this.logLevel = level
  }

  public getDriver(): LoggerDriver {
    return this.driver
  }

  public getColors(): ColorCollection {
    return this.colors
  }

  private shouldLog(msgLevel: number): boolean {
    return (this.logLevel & msgLevel) !== 0
  }

  log(msgText: string | Message | MessageBlock, prefix?: string, offset = 0): void {
    this.driver.log(this.buildMessage(msgText, prefix, offset))
  }

  info(msgText: string | Message | MessageBlock, prefix?: string, offset = 0): void {
    if (!this.shouldLog(INFO)) {
      return
    }

    const msg = this.buildMessage(msgText, prefix, offset)

    this.driver.info(msg)
  }

  debug(msgText: string | Message | MessageBlock, prefix?: string, offset = 0) {
    if (!this.shouldLog(DEBUG)) {
      return
    }

    this.driver.debug(this.buildMessage(msgText, prefix, offset))
  }

  error(msgText: string | Message | MessageBlock, prefix?: string, offset = 0) {
    if (!this.shouldLog(ERROR)) {
      return
    }

    this.driver.error(this.buildMessage(msgText, prefix, offset))
  }

  trace(msgText: string | Message | MessageBlock, prefix?: string, offset = 0) {
    if (!this.shouldLog(TRACE)) {
      return
    }

    this.driver.trace(this.buildMessage(msgText, prefix, offset))
  }

  panel(
    panelText: string | MessageBlock,
    { bgColor, color, offset }: PanelOptions = {},
    baseText?: string | MessageBlock
  ) {
    const msg = Message.instance(undefined, this.colors).pushBlock(
      MessageBlock.instance(panelText, { colors: this.colors })
        .background(bgColor || 'white')
        .color(color || 'gray')
        .offsetLeft(offset || 0)
        .borderRadius(3)
        .padding(2, 4),

      baseText ? MessageBlock.instance(baseText, { colors: this.colors }).offsetLeft(1) : null
    )

    this.driver.log(msg)
  }

  private buildMessage(msgText: string | Message | MessageBlock, prefix?: string, offset: number = 0): Message {
    if (msgText instanceof Message) {
      return msgText
    }

    const msg = new Message(undefined, this.colors)

    if (prefix) {
      const block = MessageBlock.instance(prefix, { colors: this.colors }).offsetRight(1)

      if (offset) {
        block.offsetLeft(offset)
      }

      msg.pushBlock(block)
    }

    msg.pushBlock(MessageBlock.instance(msgText, { colors: this.colors }))

    return msg
  }
}

export default Logger
