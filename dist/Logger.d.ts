import { LoggerDriver } from "./drivers/LoggerDriver";
import Message from "./Message";
import MessageBlock from "./MessageBlock";
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
    info(msgText: string, prefix?: string, offset?: number): void;
    debug(msgText: string, prefix?: string, offset?: number): void;
    error(msgText: string, prefix?: string, offset?: number): void;
    trace(msgText: string, prefix?: string, offset?: number): void;
    private static buildMessage;
}
export default Logger;
