"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _MessageBlock = _interopRequireDefault(require("./MessageBlock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
    value: function pushBlock() {
      var _this = this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      args.forEach(function (block) {
        if (block instanceof _MessageBlock.default) {
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
    value: function parse(text) {
      if (text) {
        this.pushBlock(_MessageBlock.default.instance(text));
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

var _default = Message;
exports.default = _default;
//# sourceMappingURL=Message.js.map