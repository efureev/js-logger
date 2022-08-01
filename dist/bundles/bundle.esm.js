function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectDestructuringEmpty(obj) {
  if (obj == null) throw new TypeError("Cannot destructure undefined");
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var ERROR = 1;
var INFO = 2;
var DEBUG = 4;
var TRACE = 8;
var LEVEL_ERROR = ERROR;
var LEVEL_INFO = LEVEL_ERROR | INFO;
var LEVEL_DEBUG = LEVEL_INFO | DEBUG;
var LEVEL_TRACE = LEVEL_DEBUG | TRACE;
var LOG_ALL = LEVEL_TRACE;
var ERROR_STR = 'error';
var INFO_STR = 'info';
var DEBUG_STR = 'debug';
var TRACE_STR = 'trace';
var LEVEL_INFO_STR = 'levelInfo';
var LEVEL_DEBUG_STR = 'levelDebug';
function stringToLevel(value) {
  switch (value) {
    case ERROR_STR:
      return ERROR;

    case INFO_STR:
      return INFO;

    case DEBUG_STR:
      return DEBUG;

    case TRACE_STR:
      return TRACE;

    case LEVEL_INFO_STR:
      return LEVEL_INFO;

    case LEVEL_DEBUG_STR:
      return LEVEL_DEBUG;
  }

  return LOG_ALL;
}

// export const isString = (str: any) => typeof str !== 'string'
var isEmptyObject = function isEmptyObject(object) {
  // @ts-ignore
  for (var _ref in object) {
    _objectDestructuringEmpty(_ref);

    return false;
  }

  return true;
};

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
      return !isEmptyObject(this.style);
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

var Message = /*#__PURE__*/function () {
  function Message(text, colors) {
    _classCallCheck(this, Message);

    _defineProperty(this, "blocks", new Array());

    this.parse(text, colors);
  }

  _createClass(Message, [{
    key: "getBlocks",
    value: function getBlocks() {
      return this.blocks;
    }
  }, {
    key: "pushBlock",
    value: function pushBlock() {
      var _this = this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      args.forEach(function (block) {
        if (block instanceof MessageBlock) {
          _this.blocks.push(block);
        }
      });
      return this;
    }
  }, {
    key: "clear",
    value: function clear() {
      this.blocks = [];
    }
  }, {
    key: "count",
    value: function count() {
      return this.blocks.length;
    }
  }, {
    key: "parse",
    value: function parse(text, colors) {
      if (text) {
        this.pushBlock(MessageBlock.instance(text, {
          colors: colors
        }));
      }
    }
  }], [{
    key: "instance",
    value: function instance(block, colors) {
      return block instanceof Message ? block : new Message(block, colors);
    }
  }]);

  return Message;
}();

var Logger = /*#__PURE__*/function () {
  function Logger(_ref) {
    var driver = _ref.driver,
        colors = _ref.colors,
        level = _ref.level;

    _classCallCheck(this, Logger);

    _defineProperty(this, "logLevel", LOG_ALL);

    this.driver = driver;
    this.colors = colors;

    if (level) {
      if (typeof level === 'string') {
        this.logLevel = stringToLevel(level);
      } else {
        this.logLevel = level;
      }
    }
  }

  _createClass(Logger, [{
    key: "setLogLevel",
    value: function setLogLevel(level) {
      this.logLevel = level;
    }
  }, {
    key: "addLogLevel",
    value: function addLogLevel(level) {
      this.logLevel |= level;
    }
  }, {
    key: "excludeLogLevel",
    value: function excludeLogLevel(level) {
      this.logLevel ^= level;
    }
  }, {
    key: "getDriver",
    value: function getDriver() {
      return this.driver;
    }
  }, {
    key: "getColors",
    value: function getColors() {
      return this.colors;
    }
  }, {
    key: "shouldLog",
    value: function shouldLog(level) {
      if (typeof level === 'string') {
        level = stringToLevel(level);
      }

      return (this.logLevel & level) !== 0;
    }
  }, {
    key: "log",
    value: function log(msgText, prefix) {
      var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      this.driver.log(this.buildMessage(msgText, prefix, offset));
    }
  }, {
    key: "info",
    value: function info(msgText, prefix) {
      var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      if (!this.shouldLog(INFO)) {
        return;
      }

      var msg = this.buildMessage(msgText, prefix, offset);
      this.driver.info(msg);
    }
  }, {
    key: "debug",
    value: function debug(msgText, prefix) {
      var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      if (!this.shouldLog(DEBUG)) {
        return;
      }

      this.driver.debug(this.buildMessage(msgText, prefix, offset));
    }
  }, {
    key: "error",
    value: function error(msgText, prefix) {
      var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      if (!this.shouldLog(ERROR)) {
        return;
      }

      this.driver.error(this.buildMessage(msgText, prefix, offset));
    }
  }, {
    key: "trace",
    value: function trace(msgText, prefix) {
      var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      if (!this.shouldLog(TRACE)) {
        return;
      }

      this.driver.trace(this.buildMessage(msgText, prefix, offset));
    }
    /**
     * @deprecated
     * @use panels
     */

  }, {
    key: "panel",
    value: function panel(panelText) {
      var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Object(null),
          bgColor = _ref2.bgColor,
          color = _ref2.color,
          offset = _ref2.offset;

      var baseText = arguments.length > 2 ? arguments[2] : undefined;
      var logLevel = arguments.length > 3 ? arguments[3] : undefined;

      if (logLevel && !this.shouldLog(logLevel)) {
        return;
      }

      var msg = Message.instance(undefined, this.colors).pushBlock(MessageBlock.instance(panelText, {
        colors: this.colors
      }).background(bgColor || 'white').color(color || 'gray').offsetLeft(offset || 0).borderRadius(3).padding(2, 4), baseText ? MessageBlock.instance(baseText, {
        colors: this.colors
      }).offsetLeft(1) : null);
      this.driver.log(msg);
    }
  }, {
    key: "panels",
    value: function panels(logLevel) {
      var _this = this,
          _Message$instance;

      for (var _len = arguments.length, blockConfigs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        blockConfigs[_key - 1] = arguments[_key];
      }

      if (!blockConfigs.length || logLevel && !this.shouldLog(logLevel)) {
        return;
      }

      var blocks = [];
      blockConfigs.forEach(function (blockConfig) {
        blocks.push(MessageBlock.instance(blockConfig, {
          colors: _this.colors
        }));
      });

      var msg = (_Message$instance = Message.instance()).pushBlock.apply(_Message$instance, blocks);

      this.driver.log(msg);
    }
  }, {
    key: "buildMessage",
    value: function buildMessage(msgText, prefix) {
      var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      if (msgText instanceof Message) {
        return msgText;
      }

      var msg = new Message(undefined, this.colors);

      if (prefix) {
        var block = MessageBlock.instance(prefix, {
          colors: this.colors
        }).offsetRight(1);

        if (offset) {
          block.offsetLeft(offset);
        }

        msg.pushBlock(block);
      }

      msg.pushBlock(MessageBlock.instance(msgText, {
        colors: this.colors
      }));
      return msg;
    }
  }]);

  return Logger;
}();

/*
import { Enumerate } from './helper-types'

type RGBDigit = Enumerate<256>

type RGB = `rgb(${RGBDigit}, ${RGBDigit}, ${number})`;
type RGBA = `rgba(${RGBDigit}, ${RGBDigit}, ${number}, ${number})`;

type HexDigit =
  '0'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | 'a'
  | 'b'
  | 'c'
  | 'd'
  | 'e'
  | 'f'
  | 'A'
  | 'B'
  | 'C'
  | 'D'
  | 'E'
  | 'F';

type MinHexDigitColor = `${HexDigit}${HexDigit}${HexDigit}`;
type ShortHexColor = `#${MinHexDigitColor}`;
type LongHexColor = `${ShortHexColor}${MinHexDigitColor}`;
type HexColor = LongHexColor | ShortHexColor;
*/
var colors = {
  black: '#000000',
  gray: '#1B2B34',
  grayLight: '#536069',
  red: '#EC5f67',
  orange: '#F99157',
  yellow: '#FAC863',
  green: '#99C794',
  teal: '#5FB3B3',
  blue: '#6699CC',
  purple: '#C594C5',
  brown: '#AB7967',
  white: '#FFFFFF'
};

var ConsoleDriver = /*#__PURE__*/function () {
  function ConsoleDriver() {
    _classCallCheck(this, ConsoleDriver);

    _defineProperty(this, "output", console);
  }

  _createClass(ConsoleDriver, [{
    key: "debug",
    value: function debug(msg) {
      this.perform(msg, 'debug');
    }
  }, {
    key: "info",
    value: function info(msg) {
      this.perform(msg, 'info');
    }
  }, {
    key: "log",
    value: function log(msg) {
      this.perform(msg, 'log');
    }
  }, {
    key: "error",
    value: function error(msg) {
      this.perform(msg, 'error');
    }
  }, {
    key: "trace",
    value: function trace(msg) {
      this.perform(msg, 'trace');
    }
  }, {
    key: "perform",
    value: function perform(msg, type) {
      var _this$output;

      var lines = ConsoleDriver.buildStrings(ConsoleDriver.formatMessage(msg)); // @ts-ignore

      (_this$output = this.output)[type].apply(_this$output, _toConsumableArray(lines));
    }
  }], [{
    key: "buildStrings",
    value: function buildStrings(fmt) {
      return [fmt.fmtStr].concat(_toConsumableArray(fmt.fmtArgs));
    }
  }, {
    key: "formatMessage",
    value: function formatMessage(msg) {
      var fmtStr = '';
      var fmtArgs = [];
      msg.getBlocks().forEach(function (block) {
        var _ConsoleDriver$format = ConsoleDriver.formatBlock(block),
            str = _ConsoleDriver$format.fmtStr,
            args = _ConsoleDriver$format.fmtArgs;

        fmtStr += str;
        fmtArgs.push.apply(fmtArgs, _toConsumableArray(args));
      });
      return {
        fmtStr: fmtStr,
        fmtArgs: fmtArgs
      };
    }
  }, {
    key: "formatBlock",
    value: function formatBlock(block) {
      var fmtStr = "%c".concat(block.getText());
      var fmtArgs = [];
      var strStyle = '';
      var style = block.getStyle();

      for (var keyStyle in style) {
        strStyle += "".concat(keyStyle, ":").concat(style[keyStyle], ";");
      }

      fmtArgs.push(strStyle);
      return {
        fmtStr: fmtStr,
        fmtArgs: fmtArgs
      };
    }
  }]);

  return ConsoleDriver;
}();

var ColorCollection = /*#__PURE__*/function () {
  function ColorCollection(list) {
    _classCallCheck(this, ColorCollection);

    _defineProperty(this, "list", {});

    if (list) {
      this.setCollection(list);
    }
  }

  _createClass(ColorCollection, [{
    key: "set",
    value: function set(name, value) {
      this.list[name] = value;
      return this;
    }
  }, {
    key: "setCollection",
    value: function setCollection(colors) {
      var _this = this;

      Object.keys(colors).forEach(function (name) {
        _this.set(name, colors[name]);
      });
      return this;
    }
  }, {
    key: "get",
    value: function get(name) {
      return name ? this.list[name] : undefined;
    }
  }, {
    key: "remove",
    value: function remove(name) {
      delete this.list[name];
      return this;
    }
  }]);

  return ColorCollection;
}();

var BrowserLogger = function BrowserLogger() {
  var level = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : LOG_ALL;
  return new Logger({
    driver: new ConsoleDriver(),
    colors: new ColorCollection(colors),
    level: level
  });
};

export { BrowserLogger, ConsoleDriver, DEBUG, DEBUG_STR, ERROR, ERROR_STR, INFO, INFO_STR, LEVEL_DEBUG, LEVEL_DEBUG_STR, LEVEL_ERROR, LEVEL_INFO, LEVEL_INFO_STR, LEVEL_TRACE, LOG_ALL, Message, MessageBlock, TRACE, TRACE_STR, colors, Logger as default, stringToLevel };
//# sourceMappingURL=bundle.esm.js.map
