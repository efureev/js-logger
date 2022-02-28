export interface MessageBlockStyle {
    [index: string]: any;
    color?: string;
    background?: string;
}
declare class MessageBlock {
    private _text;
    private style;
    constructor(text: string);
    push(key: string, value: string): this;
    color(value: string): this;
    background(value: string): this;
    marginLeft(value: number): this;
    marginRight(value: number): this;
    marginTop(value: number): this;
    marginBottom(value: number): this;
    margin(vValue: number, hValue?: number): this;
    padding(vValue: number, hValue?: number): this;
    offsetLeft(value: number): this;
    offsetRight(value: number): this;
    borderRadius(value: number): this;
    border(width: number, style: string, color: string): this;
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