"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = require("./utils");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MessageBlock = /*#__PURE__*/function () {
  function MessageBlock(text) {
    _classCallCheck(this, MessageBlock);

    _defineProperty(this, "style", new Object(null));

    this._text = text; // this.parse(block)
  }

  _createClass(MessageBlock, [{
    key: "push",
    value: function push(key, value) {
      this.style[key] = value;
      return this;
    }
  }, {
    key: "color",
    value: function color(value) {
      return this.push('color', value);
    }
  }, {
    key: "background",
    value: function background(value) {
      return this.push('background', value);
    }
  }, {
    key: "marginLeft",
    value: function marginLeft(value) {
      return this.push('margin-left', "".concat(value, "px"));
    }
  }, {
    key: "paddingLeft",
    value: function paddingLeft(value) {
      return this.marginLeft(value * 10);
    }
  }, {
    key: "text",
    value: function text(value) {
      this._text = value;
      return this;
    }
  }, {
    key: "getText",
    value: function getText() {
      return this._text;
    }
  }, {
    key: "getStyle",
    value: function getStyle() {
      return this.style;
    }
  }, {
    key: "hasStyle",
    value: function hasStyle() {
      return !(0, _utils.isEmptyObject)(this.style);
    }
  }, {
    key: "clearStyle",
    value: function clearStyle() {
      this.style = new Object(null);
      return this;
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return JSON.stringify({
        _text: this._text,
        style: this.style
      });
    }
  }], [{
    key: "instance",
    value: function instance(block) {
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

  }]);

  return MessageBlock;
}();

var _default = MessageBlock;
exports.default = _default;
//# sourceMappingURL=MessageBlock.js.map