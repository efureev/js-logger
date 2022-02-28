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
    // this.parse(block)
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

  paddingLeft(value: number): this {
    return this.marginLeft(value * 10)
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

  /*  getStyleString(): string {
      let str = ''

      for (const key in this.style) {
        const v = this.style[key]

        str += `${key}:${v};`
      }

      return str
    }*/

  /*
    parse(block) {
      if (isString(block)) {
        this.text = block
        return
      }

      if (isObject(block)) {
        if (!block.text) {
          throw new Error('Invalid MessageBlock config')
        }

        this.text = block.text
        // this.style = block.type || null
        return
      }

      throw new Error('Invalid MessageBlock config')
    }*/
}

export default MessageBlock
