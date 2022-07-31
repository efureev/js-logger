"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isEmptyObject = void 0;

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
//# sourceMappingURL=utils.js.map