import MessageBlock from './MessageBlock';
import ColorCollection from './ColorCollection';
declare class Message {
    private blocks;
    constructor(text?: MessageBlock | string, colors?: ColorCollection);
    getBlocks(): Array<MessageBlock>;
    pushBlock(...args: (MessageBlock | null)[]): this;
    clear(): void;
    count(): number;
    private parse;
    static instance(block?: Message | MessageBlock | string, colors?: ColorCollection): Message;
}
export default Message;
//# sourceMappingURL=Message.d.ts.map