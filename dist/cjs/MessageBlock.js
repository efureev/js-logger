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
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Object(null),
        colors = _ref.colors;

    _classCallCheck(this, MessageBlock);

    _defineProperty(this, "style", new Object(null));

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

  _createClass(MessageBlock, [{
    key: "push",
    value: function push(key, value) {
      var check = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (value !== undefined && (!check || !this.has('color'))) {
        this.style[key] = value;
      }

      return this;
    }
  }, {
    key: "has",
    value: function has(key) {
      return this.style[key] !== undefined;
    }
  }, {
    key: "color",
    value: function color(value) {
      var check = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return this.push('color', this.colors && this.colors.get(value) || value, check);
    }
  }, {
    key: "background",
    value: function background(value) {
      var check = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return this.push('background', this.colors && this.colors.get(value) || value, check);
    }
  }, {
    key: "marginLeft",
    value: function marginLeft(value) {
      var check = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (value != 0) {
        return this.push('margin-left', "".concat(value, "px"), check);
      }

      return this;
    }
  }, {
    key: "marginRight",
    value: function marginRight(value) {
      var check = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (value != 0) {
        return this.push('margin-right', "".concat(value, "px"), check);
      }

      return this;
    }
  }, {
    key: "marginTop",
    value: function marginTop(value) {
      var check = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return this.push('margin-top', "".concat(value, "px"), check);
    }
  }, {
    key: "marginBottom",
    value: function marginBottom(value) {
      var check = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return this.push('margin-bottom', "".concat(value, "px"), check);
    }
  }, {
    key: "margin",
    value: function margin(vValue, hValue) {
      var check = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var value = vValue === 0 ? '' : "".concat(vValue, "px");

      if (hValue !== undefined) {
        value += " ".concat(hValue, "px");
      }

      return this.push('margin', value, check);
    }
  }, {
    key: "padding",
    value: function padding(vValue, hValue) {
      var check = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var value = vValue === 0 ? '' : "".concat(vValue, "px");

      if (hValue !== undefined) {
        value += " ".concat(hValue, "px");
      }

      return this.push('padding', value, check);
    }
  }, {
    key: "offsetLeft",
    value: function offsetLeft(value) {
      var check = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return this.marginLeft(value * 10, check);
    }
  }, {
    key: "offsetRight",
    value: function offsetRight(value) {
      var check = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return this.marginRight(value * 10, check);
    }
  }, {
    key: "borderRadius",
    value: function borderRadius(value) {
      var check = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return this.push('border-radius', "".concat(value, "px"), check);
    }
  }, {
    key: "border",
    value: function border(width, style, color) {
      var check = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      return this.push('border', "".concat(width, "px ").concat(style, " ").concat(color), check);
    }
  }, {
    key: "size",
    value: function size(value) {
      var check = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return this.push('font-size', "".concat(value, "px"), check);
    }
  }, {
    key: "bold",
    value: function bold() {
      var check = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      return this.push('font-weight', 'bold', check);
    }
  }, {
    key: "italic",
    value: function italic() {
      var check = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      return this.push('font-style', 'italic', check);
    }
  }, {
    key: "lineHeight",
    value: function lineHeight(value) {
      var check = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return this.push('line-height', "".concat(value, "px"), check);
    }
  }, {
    key: "width",
    value: function width(value) {
      var check = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return value ? this.push('width', "".concat(value, "px"), check) : this;
    }
  }, {
    key: "height",
    value: function height(value) {
      var check = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return value ? this.push('height', "".concat(value, "px"), check) : this;
    }
  }, {
    key: "image",
    value: function image(url, width, height) {
      return this.push('background-image', "url(".concat(url, "}")).push('background-size', "cover").width(width).height(height);
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
      return this._text || '';
    }
  }, {
    key: "fillFromConfig",
    value: function fillFromConfig(config) {
      this.text(config.text).background(config.bgColor).color(config.color);
      config.offset && this.offsetLeft(config.offset);
      config.borderRadius && this.borderRadius(config.borderRadius);
      config.bold && this.bold();
      config.italic && this.italic();
      config.fontSize && this.size(config.fontSize);

      if (config.padding) {
        if (Array.isArray(config.padding)) {
          this.padding(config.padding[0], config.padding[1]);
        } else {
          this.padding(config.padding);
        }
      }
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
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Object(null);
      return block instanceof MessageBlock ? block : new MessageBlock(block, options);
    }
  }]);

  return MessageBlock;
}();

var _default = MessageBlock;
exports.default = _default;
//# sourceMappingURL=MessageBlock.js.map