import Message from '../../Message';
import MessageBlock from '../../MessageBlock';
import { LoggerDriver } from '../LoggerDriver';
export interface FormatConsole {
    fmtStr: string;
    fmtArgs: Array<string>;
}
declare class ConsoleDriver implements LoggerDriver {
    private output;
    debug(msg: Message): void;
    info(msg: Message): void;
    log(msg: Message): void;
    error(msg: Message): void;
    trace(msg: Message): void;
    protected perform(msg: Message, type: string): void;
    protected static buildStrings(fmt: FormatConsole): Array<string>;
    protected static formatMessage(msg: Message): FormatConsole;
    protected static formatBlock(block: MessageBlock): FormatConsole;
}
export default ConsoleDriver;
//# sourceMappingURL=index.d.ts.map