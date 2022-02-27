"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
class MessageBlock {
    _text;
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
        return !(0, utils_1.isEmptyObject)(this.style);
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
exports.default = MessageBlock;
