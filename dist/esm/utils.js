// export const isString = (str: any) => typeof str !== 'string'
export const isEmptyObject = object => {
  // @ts-ignore
  for ({} in object) return false;

  return true;
};
export const isString = value => typeof value === 'string';
export const isObject = Object.prototype.toString.call(null) === '[object Object]' ? function (value) {
  // check ownerDocument here as well to exclude DOM nodes
  return value != null && Object.prototype.toString.call(value) === '[object Object]' && value.ownerDocument === undefined;
} : function (value) {
  return Object.prototype.toString.call(value) === '[object Object]';
};
//# sourceMappingURL=utils.js.map