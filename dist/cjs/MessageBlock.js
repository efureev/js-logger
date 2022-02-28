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

    this._text = text;
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
    key: "marginRight",
    value: function marginRight(value) {
      return this.push('margin-right', "".concat(value, "px"));
    }
  }, {
    key: "marginTop",
    value: function marginTop(value) {
      return this.push('margin-top', "".concat(value, "px"));
    }
  }, {
    key: "marginBottom",
    value: function marginBottom(value) {
      return this.push('margin-bottom', "".concat(value, "px"));
    }
  }, {
    key: "margin",
    value: function margin(vValue, hValue) {
      var value = "".concat(vValue, "px");

      if (hValue !== undefined) {
        value += " ".concat(hValue, "px");
      }

      return this.push('margin', value);
    }
  }, {
    key: "padding",
    value: function padding(vValue, hValue) {
      var value = "".concat(vValue, "px");

      if (hValue !== undefined) {
        value += " ".concat(hValue, "px");
      }

      return this.push('padding', value);
    }
  }, {
    key: "offsetLeft",
    value: function offsetLeft(value) {
      return this.marginLeft(value * 10);
    }
  }, {
    key: "offsetRight",
    value: function offsetRight(value) {
      return this.marginRight(value * 10);
    }
  }, {
    key: "borderRadius",
    value: function borderRadius(value) {
      return this.push('border-radius', "".concat(value, "px"));
    }
  }, {
    key: "border",
    value: function border(width, style, color) {
      return this.push('border', "".concat(width, "px ").concat(style, " ").concat(color));
    }
  }, {
    key: "size",
    value: function size(value) {
      return this.push('font-size', "".concat(value, "px"));
    }
  }, {
    key: "bold",
    value: function bold() {
      return this.push('font-weight', 'bold');
    }
  }, {
    key: "lineHeight",
    value: function lineHeight(value) {
      return this.push('line-height', "".concat(value, "px"));
    }
  }, {
    key: "width",
    value: function width(value) {
      return value ? this.push('width', "".concat(value, "px")) : this;
    }
  }, {
    key: "height",
    value: function height(value) {
      return value ? this.push('height', "".concat(value, "px")) : this;
    }
  }, {
    key: "image",
    value: function image(url, width, height) {
      return this.push('background-image', "url(".concat(url, "}")).push('background-size', "cover").width(width).height(height);
    }
  }, {
    key: "italic",
    value: function italic() {
      return this.push('font-style', 'italic');
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
  }]);

  return MessageBlock;
}();

var _default = MessageBlock;
exports.default = _default;
//# sourceMappingURL=MessageBlock.js.map