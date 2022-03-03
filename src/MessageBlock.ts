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

  push(key: string, value: string, check: boolean = false): this {
    if (!check || !this.has('color')) {
      this.style[key] = value
    }

    return this
  }

  has(key: string): boolean {
    return this.style[key] !== undefined
  }

  color(value: string, check: boolean = false): this {
    return this.push('color', value, check)
  }

  background(value: string, check: boolean = false): this {
    return this.push('background', value, check)
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

  border(width: number, style: string, color: string, check: boolean = false): this {
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
