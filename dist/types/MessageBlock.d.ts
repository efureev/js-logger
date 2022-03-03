export interface MessageBlockStyle {
    [index: string]: any;
    color?: string;
    background?: string;
}
declare class MessageBlock {
    private _text;
    private style;
    constructor(text: string);
    push(key: string, value: string, check?: boolean): this;
    has(key: string): boolean;
    color(value: string, check?: boolean): this;
    background(value: string, check?: boolean): this;
    marginLeft(value: number, check?: boolean): this;
    marginRight(value: number, check?: boolean): this;
    marginTop(value: number, check?: boolean): this;
    marginBottom(value: number, check?: boolean): this;
    margin(vValue: number, hValue?: number, check?: boolean): this;
    padding(vValue: number, hValue?: number, check?: boolean): this;
    offsetLeft(value: number, check?: boolean): this;
    offsetRight(value: number, check?: boolean): this;
    borderRadius(value: number, check?: boolean): this;
    border(width: number, style: string, color: string, check?: boolean): this;
    size(value: number, check?: boolean): this;
    bold(check?: boolean): this;
    italic(check?: boolean): this;
    lineHeight(value: number, check?: boolean): this;
    width(value?: number, check?: boolean): this;
    height(value?: number, check?: boolean): this;
    image(url: string, width?: number, height?: number): this;
    text(value: string): this;
    getText(): string;
    getStyle(): MessageBlockStyle;
    hasStyle(): boolean;
    clearStyle(): this;
    toJSON(): string;
    static instance(block: MessageBlock | string): MessageBlock;
}
export default MessageBlock;
//# sourceMappingURL=MessageBlock.d.ts.map