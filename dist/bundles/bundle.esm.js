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

var LEVEL_ERROR = 1 << 0;
var LEVEL_INFO = 1 << 1;
var LEVEL_DEBUG = 1 << 2;
var LEVEL_TRACE = 1 << 3;

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

var Message = /*#__PURE__*/function () {
  function Message(text) {
    _classCallCheck(this, Message);

    _defineProperty(this, "blocks", new Array());

    this.parse(text);
  }

  _createClass(Message, [{
    key: "getBlocks",
    value: function getBlocks() {
      return this.blocks;
    }
  }, {
    key: "pushBlock",
    value: function pushBlock(block) {
      this.blocks.push(block);
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
    value: function parse(text) {
      if (text) {
        this.pushBlock(MessageBlock.instance(text));
      }
    }
  }], [{
    key: "instance",
    value: function instance(block) {
      return block instanceof Message ? block : new Message(block);
    }
  }]);

  return Message;
}();

var Logger = /*#__PURE__*/function () {
  function Logger(config) {
    _classCallCheck(this, Logger);

    _defineProperty(this, "logLevel", LEVEL_ERROR);

    this.driver = config.driver;

    if (config.level) {
      this.logLevel = config.level;
    }
  }

  _createClass(Logger, [{
    key: "setLevel",
    value: function setLevel(level) {
      this.logLevel = level;
    }
  }, {
    key: "getDriver",
    value: function getDriver() {
      return this.driver;
    }
  }, {
    key: "shouldLog",
    value: function shouldLog(msgLevel) {
      return this.logLevel <= msgLevel; // @todo: bit operations
    }
  }, {
    key: "log",
    value: function log(msgText, prefix) {
      var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      this.driver.log(Logger.buildMessage(msgText, prefix, offset));
    }
  }, {
    key: "info",
    value: function info(msgText, prefix) {
      var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      if (!this.shouldLog(LEVEL_INFO)) {
        return;
      }

      var msg = Logger.buildMessage(msgText, prefix, offset);
      this.driver.info(msg);
    }
  }, {
    key: "debug",
    value: function debug(msgText, prefix) {
      var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      if (!this.shouldLog(LEVEL_DEBUG)) {
        return;
      }

      this.driver.debug(Logger.buildMessage(msgText, prefix, offset));
    }
  }, {
    key: "error",
    value: function error(msgText, prefix) {
      var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      if (!this.shouldLog(LEVEL_ERROR)) {
        return;
      }

      this.driver.error(Logger.buildMessage(msgText, prefix, offset));
    }
  }, {
    key: "trace",
    value: function trace(msgText, prefix) {
      var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      if (!this.shouldLog(LEVEL_TRACE)) {
        return;
      }

      this.driver.trace(Logger.buildMessage(msgText, prefix, offset));
    }
  }], [{
    key: "buildMessage",
    value: function buildMessage(msgText, prefix) {
      var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      if (msgText instanceof Message) {
        return msgText;
      }

      var msg = new Message();

      if (prefix) {
        var block = new MessageBlock(prefix);

        if (offset) {
          block.paddingLeft(offset);
        }

        msg.pushBlock(block);
      }

      msg.pushBlock(MessageBlock.instance(msgText));
      return msg;
    }
  }]);

  return Logger;
}();

/*
export const STYLE_INFO = 'color: white; background:blue; padding: 2px 5px;'
export const STYLE_PURPLE = 'color: white; background:purple; padding: 2px 5px;'

export const map = {
  info: STYLE_INFO,
  purple: STYLE_PURPLE,
}
*/
var ConsoleDriver = /*#__PURE__*/function () {
  function ConsoleDriver() {
    _classCallCheck(this, ConsoleDriver);
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
      var _console;

      var lines = ConsoleDriver.buildStrings(ConsoleDriver.formatMessage(msg)); // @ts-ignore

      (_console = console)[type].apply(_console, _toConsumableArray(lines)); // console[msg.type ?? type](res[0], ...res[1])

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
      var fmtStr = '';
      var fmtArgs = [];

      if (block.hasStyle()) {
        fmtStr += '%c';
        var style = block.getStyle();
        var strStyle = '';

        for (var keyStyle in style) {
          strStyle += "".concat(keyStyle, ":").concat(style[keyStyle], ";");
        }

        fmtArgs.push(strStyle);
      }

      fmtStr += '%s';
      fmtArgs.push(block.getText());
      return {
        fmtStr: fmtStr,
        fmtArgs: fmtArgs
      };
    }
  }]);

  return ConsoleDriver;
}();

var BrowserLogger = function BrowserLogger() {
  var level = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : LEVEL_ERROR;
  return new Logger({
    level: level,
    driver: new ConsoleDriver()
  });
};

export { BrowserLogger, ConsoleDriver, Message, MessageBlock, Logger as default };
//# sourceMappingURL=bundle.esm.js.map
