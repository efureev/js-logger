"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmptyObject = exports.isString = void 0;
const isString = (str) => typeof str !== 'string';
exports.isString = isString;
const isEmptyObject = (object) => {
    for ({} in object)
        return false;
    return true;
};
exports.isEmptyObject = isEmptyObject;
