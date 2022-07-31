"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

exports.default = ColorCollection;
//# sourceMappingURL=ColorCollection.js.map