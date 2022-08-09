import { LoggerDriver } from './drivers/LoggerDriver';
import type { LevelType } from './LogLevel';
import { StringLevelType } from './LogLevel';
import Message from './Message';
import type { MessageBlockConfig } from './MessageBlock';
import MessageBlock from './MessageBlock';
import { ColorValue } from './Color';
import ColorCollection from './ColorCollection';
export interface LoggerConfig {
    driver: LoggerDriver;
    colors: ColorCollection;
    level?: StringLevelType;
}
export interface PanelOptions {
    bgColor?: ColorValue | string;
    color?: ColorValue | string;
    offset?: number;
}
export declare type BlockPanel = string | MessageBlockConfig | MessageBlock;
declare class Logger {
    private driver;
    private originDriver?;
    private readonly colors;
    private logLevel;
    constructor({ driver, colors, level }: LoggerConfig);
    setLogLevel(level: LevelType): void;
    addLogLevel(level: LevelType): void;
    excludeLogLevel(level: LevelType): void;
    getDriver(): LoggerDriver;
    setDriver(driver: LoggerDriver): this;
    enableDebug({ printFragmented, debugFn }?: {
        printFragmented?: boolean;
        debugFn?: Function;
    }): this;
    disableDebug(): this;
    returnResult(): this;
    getColors(): ColorCollection;
    protected shouldLog(level: StringLevelType): boolean;
    log(msgText: Message | BlockPanel, prefix?: BlockPanel, offset?: number): string[] | void;
    info(msgText: Message | BlockPanel, prefix?: BlockPanel, offset?: number): string[] | void;
    debug(msgText: Message | BlockPanel, prefix?: BlockPanel, offset?: number): string[] | void;
    error(msgText: Message | BlockPanel, prefix?: BlockPanel, error?: Error, offset?: number): string[] | void;
    groupCollapsed(msgText: Message | BlockPanel, lines?: string[], listLogFn?: string): void;
    trace(msgText: Message | BlockPanel, prefix?: BlockPanel, offset?: number): string[] | void;
    /**
     * @deprecated
     * @use panels
     */
    panel(panelText: string | MessageBlock, { bgColor, color, offset }?: PanelOptions, baseText?: string | MessageBlock, logLevel?: StringLevelType): string[] | void;
    panels(logLevel?: StringLevelType, ...blockConfigs: BlockPanel[]): string[] | void;
    private buildMessage;
}
export default Logger;
//# sourceMappingURL=Logger.d.ts.map