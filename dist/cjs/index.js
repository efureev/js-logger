"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  MessageBlock: true,
  Message: true,
  colors: true
};
Object.defineProperty(exports, "Message", {
  enumerable: true,
  get: function get() {
    return _Message.default;
  }
});
Object.defineProperty(exports, "MessageBlock", {
  enumerable: true,
  get: function get() {
    return _MessageBlock.default;
  }
});
Object.defineProperty(exports, "colors", {
  enumerable: true,
  get: function get() {
    return _Color.default;
  }
});
exports.default = void 0;

var _Logger = _interopRequireDefault(require("./Logger"));

var _MessageBlock = _interopRequireDefault(require("./MessageBlock"));

var _Message = _interopRequireDefault(require("./Message"));

var _Color = _interopRequireDefault(require("./Color"));

var _drivers = require("./drivers");

Object.keys(_drivers).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _drivers[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _drivers[key];
    }
  });
});

var _shorcuts = require("./shorcuts");

Object.keys(_shorcuts).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _shorcuts[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _shorcuts[key];
    }
  });
});

var _LogLevel = require("./LogLevel");

Object.keys(_LogLevel).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _LogLevel[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _LogLevel[key];
    }
  });
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _Logger.default;
exports.default = _default;
//# sourceMappingURL=index.js.map