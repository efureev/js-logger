import { isEmptyObject } from './utils';

class MessageBlock {
  style = new Object(null);

  constructor(text, {
    colors
  } = new Object(null)) {
    this.colors = colors;

    if (text === undefined) {
      throw Error('Invalid `text` argument for MessageBlock');
    }

    if (typeof text === 'string') {
      this._text = text;
    } else {
      this.fillFromConfig(text);
    }
  }

  push(key, value, check = false) {
    if (value !== undefined && (!check || !this.has('color'))) {
      this.style[key] = value;
    }

    return this;
  }

  has(key) {
    return this.style[key] !== undefined;
  }

  color(value, check = false) {
    return this.push('color', this.colors && this.colors.get(value) || value, check);
  }

  background(value, check = false) {
    return this.push('background', this.colors && this.colors.get(value) || value, check);
  }

  marginLeft(value, check = false) {
    if (value != 0) {
      return this.push('margin-left', `${value}px`, check);
    }

    return this;
  }

  marginRight(value, check = false) {
    if (value != 0) {
      return this.push('margin-right', `${value}px`, check);
    }

    return this;
  }

  marginTop(value, check = false) {
    return this.push('margin-top', `${value}px`, check);
  }

  marginBottom(value, check = false) {
    return this.push('margin-bottom', `${value}px`, check);
  }

  margin(vValue, hValue, check = false) {
    let value = vValue === 0 ? '' : `${vValue}px`;

    if (hValue !== undefined) {
      value += ` ${hValue}px`;
    }

    return this.push('margin', value, check);
  }

  padding(vValue, hValue, check = false) {
    let value = vValue === 0 ? '' : `${vValue}px`;

    if (hValue !== undefined) {
      value += ` ${hValue}px`;
    }

    return this.push('padding', value, check);
  }

  offsetLeft(value, check = false) {
    return this.marginLeft(value * 10, check);
  }

  offsetRight(value, check = false) {
    return this.marginRight(value * 10, check);
  }

  borderRadius(value, check = false) {
    return this.push('border-radius', `${value}px`, check);
  }

  border(width, style, color, check = false) {
    return this.push('border', `${width}px ${style} ${color}`, check);
  }

  size(value, check = false) {
    return this.push('font-size', `${value}px`, check);
  }

  bold(check = false) {
    return this.push('font-weight', 'bold', check);
  }

  italic(check = false) {
    return this.push('font-style', 'italic', check);
  }

  lineHeight(value, check = false) {
    return this.push('line-height', `${value}px`, check);
  }

  width(value, check = false) {
    return value ? this.push('width', `${value}px`, check) : this;
  }

  height(value, check = false) {
    return value ? this.push('height', `${value}px`, check) : this;
  }

  image(url, width, height) {
    return this.push('background-image', `url(${url}}`).push('background-size', `cover`).width(width).height(height);
  }

  text(value) {
    this._text = value;
    return this;
  }

  getText() {
    return this._text || '';
  }

  fillFromConfig(config) {
    this.text(config.text).background(config.bgColor).color(config.color);
    config.offsetLeft && this.offsetLeft(config.offsetLeft);
    config.offsetRight && this.offsetRight(config.offsetRight);
    config.borderRadius && this.borderRadius(config.borderRadius);
    config.bold && this.bold();
    config.italic && this.italic();
    config.fontSize && this.size(config.fontSize);
    config.lineHeight && this.lineHeight(config.lineHeight);
    config.marginBottom && this.marginBottom(config.marginBottom);
    config.marginTop && this.marginTop(config.marginTop);

    if (config.padding) {
      if (Array.isArray(config.padding)) {
        this.padding(config.padding[0], config.padding[1]);
      } else {
        this.padding(config.padding);
      }
    }
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

  static instance(block, options = new Object(null)) {
    return block instanceof MessageBlock ? block : new MessageBlock(block, options);
  }

}

export default MessageBlock;
//# sourceMappingURL=MessageBlock.js.map