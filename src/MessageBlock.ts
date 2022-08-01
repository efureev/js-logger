import { isEmptyObject } from './utils'
import type { ColorValue } from './Color'
import ColorCollection from './ColorCollection'

export interface MessageBlockStyle {
  [index: string]: any

  color?: ColorValue
  background?: ColorValue
}

interface MessageBlockOptions {
  colors?: ColorCollection
}

export interface MessageBlockConfig {
  text: string
  bgColor?: ColorValue | string
  bold?: boolean
  borderRadius?: number
  color?: ColorValue | string
  fontSize?: number
  italic?: boolean
  lineHeight?: number
  offsetLeft?: number
  offsetRight?: number
  marginTop?: number
  marginBottom?: number
  padding?: number | [number, number]
}

class MessageBlock {
  private _text?: string
  private readonly colors?: ColorCollection
  private style: MessageBlockStyle = new Object(null)

  constructor(text: string | MessageBlockConfig, { colors }: MessageBlockOptions = new Object(null)) {
    this.colors = colors
    if (text === undefined) {
      throw Error('Invalid `text` argument for MessageBlock')
    }

    if (typeof text === 'string') {
      this._text = text
    } else {
      this.fillFromConfig(text)
    }
  }

  push(key: string, value?: string, check: boolean = false): this {
    if (value !== undefined && (!check || !this.has('color'))) {
      this.style[key] = value
    }

    return this
  }

  has(key: string): boolean {
    return this.style[key] !== undefined
  }

  color(value?: string, check: boolean = false): this {
    return this.push('color', (this.colors && this.colors.get(value)) || value, check)
  }

  background(value?: string, check: boolean = false): this {
    return this.push('background', (this.colors && this.colors.get(value)) || value, check)
  }

  marginLeft(value: number, check: boolean = false): this {
    if (value != 0) {
      return this.push('margin-left', `${value}px`, check)
    }
    return this
  }

  marginRight(value: number, check: boolean = false): this {
    if (value != 0) {
      return this.push('margin-right', `${value}px`, check)
    }
    return this
  }

  marginTop(value: number, check: boolean = false): this {
    return this.push('margin-top', `${value}px`, check)
  }

  marginBottom(value: number, check: boolean = false): this {
    return this.push('margin-bottom', `${value}px`, check)
  }

  margin(vValue: number, hValue?: number, check: boolean = false): this {
    let value = vValue === 0 ? '' : `${vValue}px`
    if (hValue !== undefined) {
      value += ` ${hValue}px`
    }
    return this.push('margin', value, check)
  }

  padding(vValue: number, hValue?: number, check: boolean = false): this {
    let value = vValue === 0 ? '' : `${vValue}px`
    if (hValue !== undefined) {
      value += ` ${hValue}px`
    }
    return this.push('padding', value, check)
  }

  offsetLeft(value: number, check: boolean = false): this {
    return this.marginLeft(value * 10, check)
  }

  offsetRight(value: number, check: boolean = false): this {
    return this.marginRight(value * 10, check)
  }

  borderRadius(value: number, check: boolean = false): this {
    return this.push('border-radius', `${value}px`, check)
  }

  border(width: number, style: string, color: ColorValue, check: boolean = false): this {
    return this.push('border', `${width}px ${style} ${color}`, check)
  }

  size(value: number, check: boolean = false): this {
    return this.push('font-size', `${value}px`, check)
  }

  bold(check: boolean = false): this {
    return this.push('font-weight', 'bold', check)
  }

  italic(check: boolean = false): this {
    return this.push('font-style', 'italic', check)
  }

  lineHeight(value: number, check: boolean = false): this {
    return this.push('line-height', `${value}px`, check)
  }

  width(value?: number, check: boolean = false): this {
    return value ? this.push('width', `${value}px`, check) : this
  }

  height(value?: number, check: boolean = false): this {
    return value ? this.push('height', `${value}px`, check) : this
  }

  image(url: string, width?: number, height?: number): this {
    return this.push('background-image', `url(${url}}`).push('background-size', `cover`).width(width).height(height)
  }

  text(value: string): this {
    this._text = value

    return this
  }

  getText(): string {
    return this._text || ''
  }

  fillFromConfig(config: MessageBlockConfig) {
    this.text(config.text).background(config.bgColor).color(config.color)

    config.offsetLeft && this.offsetLeft(config.offsetLeft)
    config.offsetRight && this.offsetRight(config.offsetRight)
    config.borderRadius && this.borderRadius(config.borderRadius)
    config.bold && this.bold()
    config.italic && this.italic()
    config.fontSize && this.size(config.fontSize)
    config.lineHeight && this.lineHeight(config.lineHeight)
    config.marginBottom && this.marginBottom(config.marginBottom)
    config.marginTop && this.marginTop(config.marginTop)

    if (config.padding) {
      if (Array.isArray(config.padding)) {
        this.padding(config.padding[0], config.padding[1])
      } else {
        this.padding(config.padding)
      }
    }
  }

  getStyle(): MessageBlockStyle {
    return this.style
  }

  hasStyle(): boolean {
    return !isEmptyObject(this.style)
  }

  clearStyle(): this {
    this.style = new Object(null)

    return this
  }

  toJSON(): string {
    return JSON.stringify({
      _text: this._text,
      style: this.style,
    })
  }

  static instance(
    block: MessageBlock | MessageBlockConfig | string,
    options: MessageBlockOptions = new Object(null)
  ): MessageBlock {
    return block instanceof MessageBlock ? block : new MessageBlock(block, options)
  }
}

export default MessageBlock
