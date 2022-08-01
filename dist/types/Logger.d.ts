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
interface PanelOptions {
    bgColor?: ColorValue | string;
    color?: ColorValue | string;
    offset?: number;
}
declare type BlockPanel = string | MessageBlockConfig | MessageBlock;
declare class Logger {
    private readonly driver;
    private readonly colors;
    private logLevel;
    constructor({ driver, colors, level }: LoggerConfig);
    setLogLevel(level: LevelType): void;
    addLogLevel(level: LevelType): void;
    excludeLogLevel(level: LevelType): void;
    getDriver(): LoggerDriver;
    getColors(): ColorCollection;
    private shouldLog;
    log(msgText: string | Message | MessageBlock, prefix?: string, offset?: number): void;
    info(msgText: string | Message | MessageBlock, prefix?: string, offset?: number): void;
    debug(msgText: string | Message | MessageBlock, prefix?: string, offset?: number): void;
    error(msgText: string | Message | MessageBlock, prefix?: string, offset?: number): void;
    trace(msgText: string | Message | MessageBlock, prefix?: string, offset?: number): void;
    /**
     * @deprecated
     * @use panels
     */
    panel(panelText: string | MessageBlock, { bgColor, color, offset }?: PanelOptions, baseText?: string | MessageBlock, logLevel?: StringLevelType): void;
    panels(logLevel?: StringLevelType, ...blockConfigs: BlockPanel[]): void;
    private buildMessage;
}
export default Logger;
//# sourceMappingURL=Logger.d.ts.map