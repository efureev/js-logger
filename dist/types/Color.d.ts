declare type RGB = `rgb(${number}, ${number}, ${number})`;
declare type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
declare type HexColor = `#${string}`;
export declare type ColorValue = HexColor | RGB | RGBA;
declare type ColorsType = Record<string, ColorValue>;
declare const colors: ColorsType;
export default colors;
//# sourceMappingURL=Color.d.ts.map