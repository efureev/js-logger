"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var _default = ConsoleDriver;
exports.default = _default;
//# sourceMappingURL=index.js.map