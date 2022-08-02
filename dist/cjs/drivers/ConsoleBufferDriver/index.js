"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ConsoleDriver2 = _interopRequireDefault(require("../ConsoleDriver"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ConsoleBuffer = /*#__PURE__*/function (_ConsoleDriver) {
  _inherits(ConsoleBuffer, _ConsoleDriver);

  var _super = _createSuper(ConsoleBuffer);

  function ConsoleBuffer() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        print = _ref.print,
        printFragmented = _ref.printFragmented,
        debugFn = _ref.debugFn;

    _classCallCheck(this, ConsoleBuffer);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "print", false);

    _defineProperty(_assertThisInitialized(_this), "printFragmented", false);

    _defineProperty(_assertThisInitialized(_this), "buffer", []);

    _this.print = print || false;
    _this.printFragmented = printFragmented || false;
    _this.debugFn = debugFn || _this.output.dir;
    return _this;
  }

  _createClass(ConsoleBuffer, [{
    key: "perform",
    value: function perform(msg, type) {
      this.buffer = _ConsoleDriver2.default.buildStrings(_ConsoleDriver2.default.formatMessage(msg));

      if (this.print) {
        this.output.warn('--[debug] start');

        _get(_getPrototypeOf(ConsoleBuffer.prototype), "perform", this).call(this, msg, type);

        this.debugFn(this.buffer);

        if (this.printFragmented) {
          this.performFragmented();
        }

        this.output.warn('--[debug] finish');
      }
    }
  }, {
    key: "performFragmented",
    value: function performFragmented() {
      var _this2 = this;

      if (!this.buffer.length) {
        return;
      }

      var fragments = this.buffer[0].split('%c').slice(1);
      var styles = this.buffer.slice(1);

      if (fragments.length != styles.length) {
        this.output.error('data inconsistency error: fragments: %d, styles: %d', fragments.length, styles.length);
        this.output.log('fragments', fragments);
        this.output.log('styles', styles);
      }

      fragments.forEach(function (fragment, idx) {
        _this2.output.log("".concat(fragment, ": ").concat(styles[idx]));

        _this2.output.log("%c".concat(fragment), styles[idx]);
      });
    }
  }, {
    key: "clearBuffer",
    value: function clearBuffer() {
      this.buffer = [];
    }
  }]);

  return ConsoleBuffer;
}(_ConsoleDriver2.default);

exports.default = ConsoleBuffer;
//# sourceMappingURL=index.js.map