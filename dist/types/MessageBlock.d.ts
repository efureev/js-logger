import type { ColorValue } from './Color';
import ColorCollection from './ColorCollection';
export interface MessageBlockStyle {
    [index: string]: any;
    color?: ColorValue;
    background?: ColorValue;
}
interface MessageBlockOptions {
    colors?: ColorCollection;
}
export interface MessageBlockConfig {
    text: string;
    bgColor?: ColorValue | string;
    bold?: boolean;
    borderRadius?: number;
    color?: ColorValue | string;
    fontSize?: number;
    italic?: boolean;
    lineHeight?: number;
    offsetLeft?: number;
    offsetRight?: number;
    marginTop?: number;
    marginBottom?: number;
    padding?: number | [number, number];
}
declare class MessageBlock {
    private _text?;
    private readonly colors?;
    private style;
    constructor(text: string | MessageBlockConfig, { colors }?: MessageBlockOptions);
    push(key: string, value?: string, check?: boolean): this;
    has(key: string): boolean;
    color(value?: string, check?: boolean): this;
    background(value?: string, check?: boolean): this;
    marginLeft(value: number, check?: boolean): this;
    marginRight(value: number, check?: boolean): this;
    marginTop(value: number, check?: boolean): this;
    marginBottom(value: number, check?: boolean): this;
    margin(vValue: number, hValue?: number, check?: boolean): this;
    padding(vValue: number, hValue?: number, check?: boolean): this;
    offsetLeft(value: number, check?: boolean): this;
    offsetRight(value: number, check?: boolean): this;
    borderRadius(value: number, check?: boolean): this;
    border(width: number, style: string, color: ColorValue, check?: boolean): this;
    size(value: number, check?: boolean): this;
    bold(check?: boolean): this;
    italic(check?: boolean): this;
    lineHeight(value: number, check?: boolean): this;
    width(value?: number, check?: boolean): this;
    height(value?: number, check?: boolean): this;
    image(url: string, width?: number, height?: number): this;
    text(value: string): this;
    getText(): string;
    fillFromConfig(config: MessageBlockConfig): void;
    getStyle(): MessageBlockStyle;
    hasStyle(): boolean;
    clearStyle(): this;
    toJSON(): string;
    static instance(block: MessageBlock | MessageBlockConfig | string, options?: MessageBlockOptions): MessageBlock;
}
export default MessageBlock;
//# sourceMappingURL=MessageBlock.d.ts.map