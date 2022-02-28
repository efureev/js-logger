import MessageBlock from './MessageBlock';
declare class Message {
    private blocks;
    constructor(text?: MessageBlock | string);
    getBlocks(): Array<MessageBlock>;
    pushBlock(...args: MessageBlock[]): this;
    clear(): void;
    count(): number;
    private parse;
    static instance(block?: Message | MessageBlock | string): Message;
}
export default Message;
//# sourceMappingURL=Message.d.ts.map