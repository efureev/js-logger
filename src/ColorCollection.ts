import { ColorValue } from './Color'

type ListCollectionType = Record<string, ColorValue>

export default class ColorCollection {
  list: ListCollectionType = {}

  constructor(list?: ListCollectionType) {
    if (list) {
      this.setCollection(list)
    }
  }

  set(name: string, value: ColorValue): this {
    this.list[name] = value

    return this
  }

  setCollection(colors: ListCollectionType): this {
    Object.keys(colors).forEach(name => {
      this.set(name, colors[name])
    })

    return this
  }

  get(name?: string): ColorValue | undefined {
    return name ? this.list[name] : undefined
  }

  remove(name: string): this {
    delete this.list[name]

    return this
  }
}
