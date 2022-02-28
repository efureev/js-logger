"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _LogLevel = require("./LogLevel");

var _Message = _interopRequireDefault(require("./Message"));

var _MessageBlock = _interopRequireDefault(require("./MessageBlock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Logger = /*#__PURE__*/function () {
  function Logger(config) {
    _classCallCheck(this, Logger);

    _defineProperty(this, "logLevel", _LogLevel.LEVEL_ERROR);

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

      if (!this.shouldLog(_LogLevel.LEVEL_INFO)) {
        return;
      }

      var msg = Logger.buildMessage(msgText, prefix, offset);
      this.driver.info(msg);
    }
  }, {
    key: "debug",
    value: function debug(msgText, prefix) {
      var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      if (!this.shouldLog(_LogLevel.LEVEL_DEBUG)) {
        return;
      }

      this.driver.debug(Logger.buildMessage(msgText, prefix, offset));
    }
  }, {
    key: "error",
    value: function error(msgText, prefix) {
      var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      if (!this.shouldLog(_LogLevel.LEVEL_ERROR)) {
        return;
      }

      this.driver.error(Logger.buildMessage(msgText, prefix, offset));
    }
  }, {
    key: "trace",
    value: function trace(msgText, prefix) {
      var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      if (!this.shouldLog(_LogLevel.LEVEL_TRACE)) {
        return;
      }

      this.driver.trace(Logger.buildMessage(msgText, prefix, offset));
    }
  }], [{
    key: "buildMessage",
    value: function buildMessage(msgText, prefix) {
      var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      if (msgText instanceof _Message.default) {
        return msgText;
      }

      var msg = new _Message.default();

      if (prefix) {
        var block = new _MessageBlock.default(prefix);

        if (offset) {
          block.paddingLeft(offset);
        }

        msg.pushBlock(block);
      }

      msg.pushBlock(_MessageBlock.default.instance(msgText));
      return msg;
    }
  }]);

  return Logger;
}();

var _default = Logger;
exports.default = _default;
//# sourceMappingURL=Logger.js.map