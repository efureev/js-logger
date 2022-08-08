// export const isString = (str: any) => typeof str !== 'string'

import { BlockPanel } from './Logger'

export const isEmptyObject = (object: object | BlockPanel) => {
  // @ts-ignore
  for ({} in object) return false

  return true
}

export const isString = (value: any) => typeof value === 'string'

export const isObject: (v: any) => boolean =
  Object.prototype.toString.call(null) === '[object Object]'
    ? function (value: any): boolean {
        // check ownerDocument here as well to exclude DOM nodes
        return (
          value != null &&
          Object.prototype.toString.call(value) === '[object Object]' &&
          value.ownerDocument === undefined
        )
      }
    : function (value: any): boolean {
        return Object.prototype.toString.call(value) === '[object Object]'
      }
