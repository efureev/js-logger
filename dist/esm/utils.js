// export const isString = (str: any) => typeof str !== 'string'
export const isEmptyObject = object => {
  // @ts-ignore
  for ({} in object) return false;

  return true;
};
export const isString = value => typeof value === 'string';
//# sourceMappingURL=utils.js.map