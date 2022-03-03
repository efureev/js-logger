import { LoggerDriver } from './drivers/LoggerDriver';
import Message from './Message';
import MessageBlock from './MessageBlock';
export interface LoggerConfig {
    driver: LoggerDriver;
    level?: number;
}
declare class Logger {
    private readonly driver;
    private logLevel;
    constructor(config: LoggerConfig);
    setLevel(level: number): void;
    getDriver(): LoggerDriver;
    private shouldLog;
    log(msgText: string | Message | MessageBlock, prefix?: string, offset?: number): void;
    info(msgText: string | Message | MessageBlock, prefix?: string, offset?: number): void;
    debug(msgText: string | Message | MessageBlock, prefix?: string, offset?: number): void;
    error(msgText: string | Message | MessageBlock, prefix?: string, offset?: number): void;
    trace(msgText: string | Message | MessageBlock, prefix?: string, offset?: number): void;
    panel(panelText: string | MessageBlock, { bgColor, color, offset }?: {
        bgColor?: string | undefined;
        color?: string | undefined;
        offset?: number | undefined;
    }, baseText?: string | MessageBlock): void;
    private static buildMessage;
}
export default Logger;
//# sourceMappingURL=Logger.d.ts.map