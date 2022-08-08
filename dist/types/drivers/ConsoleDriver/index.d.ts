import Message from '../../Message';
import MessageBlock from '../../MessageBlock';
import { LoggerDriver } from '../LoggerDriver';
export interface FormatConsole {
    fmtStr: string;
    fmtArgs: Array<string>;
}
declare class ConsoleDriver implements LoggerDriver {
    protected _returnResult: boolean;
    protected output: Console;
    debug(msg: Message): string[] | void;
    info(msg: Message): string[] | void;
    log(msg: Message): string[] | void;
    error(msg: Message): string[] | void;
    trace(msg: Message): string[] | void;
    protected perform(msg: Message, type: string): string[] | void;
    returnResult(): this;
    protected static buildStrings(fmt: FormatConsole): Array<string>;
    protected static formatMessage(msg: Message): FormatConsole;
    protected static formatBlock(block: MessageBlock): FormatConsole;
}
export default ConsoleDriver;
//# sourceMappingURL=index.d.ts.map