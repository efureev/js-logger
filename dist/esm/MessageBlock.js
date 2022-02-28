import { isEmptyObject } from './utils';

class MessageBlock {
  style = new Object(null);

  constructor(text) {
    this._text = text;
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

  marginRight(value) {
    return this.push('margin-right', `${value}px`);
  }

  marginTop(value) {
    return this.push('margin-top', `${value}px`);
  }

  marginBottom(value) {
    return this.push('margin-bottom', `${value}px`);
  }

  margin(vValue, hValue) {
    let value = `${vValue}px`;

    if (hValue !== undefined) {
      value += ` ${hValue}px`;
    }

    return this.push('margin', value);
  }

  padding(vValue, hValue) {
    let value = `${vValue}px`;

    if (hValue !== undefined) {
      value += ` ${hValue}px`;
    }

    return this.push('padding', value);
  }

  offsetLeft(value) {
    return this.marginLeft(value * 10);
  }

  offsetRight(value) {
    return this.marginRight(value * 10);
  }

  borderRadius(value) {
    return this.push('border-radius', `${value}px`);
  }

  border(width, style, color) {
    return this.push('border', `${width}px ${style} ${color}`);
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

}

export default MessageBlock;
//# sourceMappingURL=MessageBlock.js.map