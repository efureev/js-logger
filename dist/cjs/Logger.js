"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ConsoleBufferDriver = _interopRequireDefault(require("./drivers/ConsoleBufferDriver"));

var _LogLevel = require("./LogLevel");

var _Message = _interopRequireDefault(require("./Message"));

var _MessageBlock = _interopRequireDefault(require("./MessageBlock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Logger = /*#__PURE__*/function () {
  function Logger(_ref) {
    var driver = _ref.driver,
        colors = _ref.colors,
        level = _ref.level;

    _classCallCheck(this, Logger);

    _defineProperty(this, "logLevel", _LogLevel.LOG_ALL);

    this.driver = driver;
    this.colors = colors;

    if (level) {
      if (typeof level === 'string') {
        this.logLevel = (0, _LogLevel.stringToLevel)(level);
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
    key: "setDriver",
    value: function setDriver(driver) {
      this.driver = driver;
      return this;
    }
  }, {
    key: "enableDebug",
    value: function enableDebug() {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          printFragmented = _ref2.printFragmented,
          debugFn = _ref2.debugFn;

      this.originDriver = this.driver;
      this.driver = new _ConsoleBufferDriver.default({
        print: true,
        printFragmented: printFragmented,
        debugFn: debugFn
      });
      return this;
    }
  }, {
    key: "disableDebug",
    value: function disableDebug() {
      if (this.originDriver) {
        this.setDriver(this.originDriver);
        this.originDriver = undefined;
      }

      return this;
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
        level = (0, _LogLevel.stringToLevel)(level);
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

      if (!this.shouldLog(_LogLevel.INFO)) {
        return;
      }

      var msg = this.buildMessage(msgText, prefix, offset);
      this.driver.info(msg);
    }
  }, {
    key: "debug",
    value: function debug(msgText, prefix) {
      var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      if (!this.shouldLog(_LogLevel.DEBUG)) {
        return;
      }

      this.driver.debug(this.buildMessage(msgText, prefix, offset));
    }
  }, {
    key: "error",
    value: function error(msgText, prefix) {
      var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      if (!this.shouldLog(_LogLevel.ERROR)) {
        return;
      }

      this.driver.error(this.buildMessage(msgText, prefix, offset));
    }
  }, {
    key: "trace",
    value: function trace(msgText, prefix) {
      var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      if (!this.shouldLog(_LogLevel.TRACE)) {
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
      var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Object(null),
          bgColor = _ref3.bgColor,
          color = _ref3.color,
          offset = _ref3.offset;

      var baseText = arguments.length > 2 ? arguments[2] : undefined;
      var logLevel = arguments.length > 3 ? arguments[3] : undefined;

      if (logLevel && !this.shouldLog(logLevel)) {
        return;
      }

      var msg = _Message.default.instance(undefined, this.colors).pushBlock(_MessageBlock.default.instance(panelText, {
        colors: this.colors
      }).background(bgColor || 'white').color(color || 'gray').offsetLeft(offset || 0).borderRadius(3).padding(2, 4), baseText ? _MessageBlock.default.instance(baseText, {
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
        blocks.push(_MessageBlock.default.instance(blockConfig, {
          colors: _this.colors
        }));
      });

      var msg = (_Message$instance = _Message.default.instance()).pushBlock.apply(_Message$instance, blocks);

      this.driver.log(msg);
    }
  }, {
    key: "buildMessage",
    value: function buildMessage(msgText, prefix) {
      var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      if (msgText instanceof _Message.default) {
        return msgText;
      }

      var msg = new _Message.default(undefined, this.colors);

      if (prefix) {
        var block = _MessageBlock.default.instance(prefix, {
          colors: this.colors
        }).offsetRight(1);

        if (offset) {
          block.offsetLeft(offset);
        }

        msg.pushBlock(block);
      }

      msg.pushBlock(_MessageBlock.default.instance(msgText, {
        colors: this.colors
      }));
      return msg;
    }
  }]);

  return Logger;
}();

var _default = Logger;
exports.default = _default;
//# sourceMappingURL=Logger.js.map