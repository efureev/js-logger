import { isEmptyObject } from './utils'

export interface MessageBlockStyle {
  [index: string]: any

  color?: string
  background?: string
}

class MessageBlock {
  private _text: string
  private style: MessageBlockStyle = new Object(null)

  constructor(text: string) {
    this._text = text
  }

  push(key: string, value: string): this {
    this.style[key] = value

    return this
  }

  color(value: string): this {
    return this.push('color', value)
  }

  background(value: string): this {
    return this.push('background', value)
  }

  marginLeft(value: number): this {
    return this.push('margin-left', `${value}px`)
  }

  marginRight(value: number): this {
    return this.push('margin-right', `${value}px`)
  }

  marginTop(value: number): this {
    return this.push('margin-top', `${value}px`)
  }

  marginBottom(value: number): this {
    return this.push('margin-bottom', `${value}px`)
  }

  margin(vValue: number, hValue?: number): this {
    let value = `${vValue}px`
    if (hValue !== undefined) {
      value += ` ${hValue}px`
    }
    return this.push('margin', value)
  }

  padding(vValue: number, hValue?: number): this {
    let value = `${vValue}px`
    if (hValue !== undefined) {
      value += ` ${hValue}px`
    }
    return this.push('padding', value)
  }

  offsetLeft(value: number): this {
    return this.marginLeft(value * 10)
  }

  offsetRight(value: number): this {
    return this.marginRight(value * 10)
  }

  borderRadius(value: number): this {
    return this.push('border-radius', `${value}px`)
  }

  border(width: number, style: string, color: string): this {
    return this.push('border', `${width}px ${style} ${color}`)
  }

  size(value: number): this {
    return this.push('font-size', `${value}px`)
  }

  bold(): this {
    return this.push('font-weight', 'bold')
  }

  lineHeight(value: number): this {
    return this.push('line-height', `${value}px`)
  }

  width(value?: number): this {
    return value ? this.push('width', `${value}px`) : this
  }

  height(value?: number): this {
    return value ? this.push('height', `${value}px`) : this
  }

  image(url: string, width?: number, height?: number): this {
    return this.push('background-image', `url(${url}}`).push('background-size', `cover`).width(width).height(height)
  }

  italic(): this {
    return this.push('font-style', 'italic')
  }

  text(value: string): this {
    this._text = value

    return this
  }

  getText(): string {
    return this._text
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

  static instance(block: MessageBlock | string): MessageBlock {
    return block instanceof MessageBlock ? block : new MessageBlock(block)
  }
}

export default MessageBlock
