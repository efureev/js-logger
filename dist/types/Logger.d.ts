import { LoggerDriver } from './drivers/LoggerDriver';
import type { LevelType } from './LogLevel';
import Message from './Message';
import MessageBlock from './MessageBlock';
import { ColorValue } from './Color';
import ColorCollection from './ColorCollection';
export interface LoggerConfig {
    driver: LoggerDriver;
    colors: ColorCollection;
    level?: LevelType;
}
interface PanelOptions {
    bgColor?: ColorValue;
    color?: ColorValue;
    offset?: number;
}
declare class Logger {
    private readonly driver;
    private readonly colors;
    private logLevel;
    constructor({ driver, colors, level }: LoggerConfig);
    setLevel(level: LevelType): void;
    getDriver(): LoggerDriver;
    getColors(): ColorCollection;
    private shouldLog;
    log(msgText: string | Message | MessageBlock, prefix?: string, offset?: number): void;
    info(msgText: string | Message | MessageBlock, prefix?: string, offset?: number): void;
    debug(msgText: string | Message | MessageBlock, prefix?: string, offset?: number): void;
    error(msgText: string | Message | MessageBlock, prefix?: string, offset?: number): void;
    trace(msgText: string | Message | MessageBlock, prefix?: string, offset?: number): void;
    panel(panelText: string | MessageBlock, { bgColor, color, offset }?: PanelOptions, baseText?: string | MessageBlock): void;
    private buildMessage;
}
export default Logger;
//# sourceMappingURL=Logger.d.ts.map