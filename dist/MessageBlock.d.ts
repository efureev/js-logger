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
    paddingLeft(value: number): this;
    text(value: string): this;
    getText(): string;
    getStyle(): MessageBlockStyle;
    hasStyle(): boolean;
    clearStyle(): this;
    toJSON(): string;
    static instance(block: MessageBlock | string): MessageBlock;
}
export default MessageBlock;
