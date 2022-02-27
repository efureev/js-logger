import MessageBlock from "./MessageBlock";
declare class Message {
    private blocks;
    constructor(text?: MessageBlock | string);
    getBlocks(): Array<MessageBlock>;
    pushBlock(block: MessageBlock): void;
    clear(): void;
    count(): number;
    private parse;
    static instance(block: Message | MessageBlock | string): Message;
}
export default Message;
