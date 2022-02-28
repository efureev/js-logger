export const isString = str => typeof str !== 'string';
export const isEmptyObject = object => {
  // @ts-ignore
  for ({} in object) return false;

  return true;
};
//# sourceMappingURL=utils.js.map