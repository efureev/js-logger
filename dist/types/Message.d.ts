import MessageBlock from './MessageBlock';
import ColorCollection from './ColorCollection';
import { BlockPanel } from './Logger';
declare class Message {
    private blocks;
    constructor(text?: BlockPanel, colors?: ColorCollection);
    getBlocks(): Array<MessageBlock>;
    pushBlock(...args: (MessageBlock | null)[]): this;
    clear(): void;
    count(): number;
    private parse;
    static instance(block?: Message | BlockPanel, colors?: ColorCollection): Message;
}
export default Message;
//# sourceMappingURL=Message.d.ts.map