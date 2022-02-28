"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isString = exports.isEmptyObject = void 0;

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

var isString = function isString(str) {
  return typeof str !== 'string';
};

exports.isString = isString;

var isEmptyObject = function isEmptyObject(object) {
  // @ts-ignore
  for (var _ref in object) {
    _objectDestructuringEmpty(_ref);

    return false;
  }

  return true;
};

exports.isEmptyObject = isEmptyObject;
//# sourceMappingURL=utils.js.map