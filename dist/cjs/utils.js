"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isString = exports.isObject = exports.isEmptyObject = void 0;

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

// export const isString = (str: any) => typeof str !== 'string'
var isEmptyObject = function isEmptyObject(object) {
  // @ts-ignore
  for (var _ref in object) {
    _objectDestructuringEmpty(_ref);

    return false;
  }

  return true;
};

exports.isEmptyObject = isEmptyObject;

var isString = function isString(value) {
  return typeof value === 'string';
};

exports.isString = isString;
var isObject = Object.prototype.toString.call(null) === '[object Object]' ? function (value) {
  // check ownerDocument here as well to exclude DOM nodes
  return value != null && Object.prototype.toString.call(value) === '[object Object]' && value.ownerDocument === undefined;
} : function (value) {
  return Object.prototype.toString.call(value) === '[object Object]';
};
exports.isObject = isObject;
//# sourceMappingURL=utils.js.map