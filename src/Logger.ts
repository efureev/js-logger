import { LoggerDriver } from './drivers/LoggerDriver'
import ConsoleBufferDriver from './drivers/ConsoleBufferDriver'
import type { LevelType } from './LogLevel'
import { DEBUG, ERROR, INFO, LOG_ALL, StringLevelType, stringToLevel, TRACE } from './LogLevel'
import Message from './Message'
import type { MessageBlockConfig } from './MessageBlock'
import MessageBlock from './MessageBlock'
import { ColorValue } from './Color'
import ColorCollection from './ColorCollection'
import { isEmptyObject, isObject, isString } from './utils'

export interface LoggerConfig {
  driver: LoggerDriver
  colors: ColorCollection
  level?: StringLevelType
}

interface PanelOptions {
  bgColor?: ColorValue | string
  color?: ColorValue | string
  offset?: number
}

export type BlockPanel = string | MessageBlockConfig | MessageBlock

class Logger {
  private driver: LoggerDriver
  private originDriver?: LoggerDriver
  private readonly colors: ColorCollection

  private logLevel: LevelType = LOG_ALL

  constructor({ driver, colors, level }: LoggerConfig) {
    this.driver = driver
    this.colors = colors

    if (level) {
      if (typeof level === 'string') {
        this.logLevel = stringToLevel(level)
      } else {
        this.logLevel = level
      }
    }
  }

  setLogLevel(level: LevelType): void {
    this.logLevel = level
  }

  addLogLevel(level: LevelType): void {
    this.logLevel |= level
  }

  excludeLogLevel(level: LevelType): void {
    this.logLevel ^= level
  }

  public getDriver(): LoggerDriver {
    return this.driver
  }

  public setDriver(driver: LoggerDriver): this {
    this.driver = driver

    return this
  }

  public enableDebug({ printFragmented, debugFn }: { printFragmented?: boolean; debugFn?: Function } = {}): this {
    this.originDriver = this.driver
    this.driver = new ConsoleBufferDriver({ print: true, printFragmented, debugFn })

    return this
  }

  public disableDebug(): this {
    if (this.originDriver) {
      this.setDriver(this.originDriver)
      this.originDriver = undefined
    }

    return this
  }

  public returnResult(): this {
    this.driver.returnResult()

    return this
  }

  public getColors(): ColorCollection {
    return this.colors
  }

  private shouldLog(level: StringLevelType): boolean {
    if (typeof level === 'string') {
      level = stringToLevel(level)
    }

    return (this.logLevel & level) !== 0
  }

  log(msgText: Message | BlockPanel, prefix?: BlockPanel, offset = 0): string[] | void {
    return this.driver.log(this.buildMessage(msgText, prefix, offset))
  }

  info(msgText: Message | BlockPanel, prefix?: BlockPanel, offset = 0): string[] | void {
    if (!this.shouldLog(INFO)) {
      return
    }

    const msg = this.buildMessage(msgText, prefix, offset)

    return this.driver.info(msg)
  }

  debug(msgText: Message | BlockPanel, prefix?: BlockPanel, offset = 0): string[] | void {
    if (!this.shouldLog(DEBUG)) {
      return
    }

    return this.driver.debug(this.buildMessage(msgText, prefix, offset))
  }

  error(msgText: Message | BlockPanel, prefix?: BlockPanel, error?: Error, offset = 0): string[] | void {
    if (!this.shouldLog(ERROR)) {
      return
    }

    if (error instanceof Error && error.stack && isString(error.stack)) {
      const lines = error.stack.split('\n')
      this.groupCollapsed(this.buildMessage(msgText, prefix, offset), lines)
      return
    }

    return this.driver.error(this.buildMessage(msgText, prefix, offset))
  }

  groupCollapsed(msgText: Message | BlockPanel, lines: string[] = [], listLogFn: string = 'log'): void {
    this.driver.groupCollapsed(this.buildMessage(msgText))

    lines.forEach(line => {
      this.driver.performLines([line], listLogFn)
    })

    this.driver.groupEnd()
  }

  trace(msgText: Message | BlockPanel, prefix?: BlockPanel, offset = 0): string[] | void {
    if (!this.shouldLog(TRACE)) {
      return
    }

    return this.driver.trace(this.buildMessage(msgText, prefix, offset))
  }

  /**
   * @deprecated
   * @use panels
   */
  panel(
    panelText: string | MessageBlock,
    { bgColor, color, offset }: PanelOptions = Object.create(null),
    baseText?: string | MessageBlock,
    logLevel?: StringLevelType
  ): string[] | void {
    if (logLevel && !this.shouldLog(logLevel)) {
      return
    }

    const msg = Message.instance(undefined, this.colors).pushBlock(
      MessageBlock.instance(panelText, { colors: this.colors })
        .background(bgColor || 'white')
        .color(color || 'gray')
        .offsetLeft(offset || 0)
        .borderRadius(3)
        .padding(2, 4),

      baseText ? MessageBlock.instance(baseText, { colors: this.colors }).offsetLeft(1) : null
    )

    return this.driver.log(msg)
  }

  panels(logLevel?: StringLevelType, ...blockConfigs: BlockPanel[]): string[] | void {
    if (!blockConfigs.length || (logLevel && !this.shouldLog(logLevel))) {
      return
    }

    const blocks: MessageBlock[] = []
    blockConfigs.forEach(blockConfig => {
      if ((isString(blockConfig) && blockConfig !== '') || (isObject(blockConfig) && !isEmptyObject(blockConfig))) {
        blocks.push(MessageBlock.instance(blockConfig, { colors: this.colors }))
      }
    })

    if (!blocks.length) {
      return
    }

    const msg = Message.instance().pushBlock(...blocks)

    return this.driver.log(msg)
  }

  private buildMessage(msgText: Message | BlockPanel, prefix?: BlockPanel, offset: number = 0): Message {
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
