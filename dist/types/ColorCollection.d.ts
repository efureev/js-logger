import { ColorValue } from './Color';
declare type ListCollectionType = Record<string, ColorValue>;
export default class ColorCollection {
    list: ListCollectionType;
    constructor(list?: ListCollectionType);
    set(name: string, value: ColorValue): this;
    setCollection(colors: ListCollectionType): this;
    get(name?: string): ColorValue | undefined;
    remove(name: string): this;
}
export {};
//# sourceMappingURL=ColorCollection.d.ts.map