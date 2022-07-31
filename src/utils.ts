// export const isString = (str: any) => typeof str !== 'string'

export const isEmptyObject = (object: object) => {
  // @ts-ignore
  for ({} in object) return false

  return true
}
