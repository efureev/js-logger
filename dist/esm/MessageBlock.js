import { isEmptyObject } from './utils';

class MessageBlock {
  style = new Object(null);

  constructor(text) {
    this._text = text; // this.parse(block)
  }

  push(key, value) {
    this.style[key] = value;
    return this;
  }

  color(value) {
    return this.push('color', value);
  }

  background(value) {
    return this.push('background', value);
  }

  marginLeft(value) {
    return this.push('margin-left', `${value}px`);
  }

  paddingLeft(value) {
    return this.marginLeft(value * 10);
  }

  text(value) {
    this._text = value;
    return this;
  }

  getText() {
    return this._text;
  }

  getStyle() {
    return this.style;
  }

  hasStyle() {
    return !isEmptyObject(this.style);
  }

  clearStyle() {
    this.style = new Object(null);
    return this;
  }

  toJSON() {
    return JSON.stringify({
      _text: this._text,
      style: this.style
    });
  }

  static instance(block) {
    return block instanceof MessageBlock ? block : new MessageBlock(block);
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

export default MessageBlock;
//# sourceMappingURL=MessageBlock.js.map