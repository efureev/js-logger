"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LogLevel_1 = require("./LogLevel");
const Message_1 = __importDefault(require("./Message"));
const MessageBlock_1 = __importDefault(require("./MessageBlock"));
class Logger {
    driver;
    logLevel = LogLevel_1.LEVEL_ERROR;
    constructor(config) {
        this.driver = config.driver;
        if (config.level) {
            this.logLevel = config.level;
        }
    }
    setLevel(level) {
        this.logLevel = level;
    }
    getDriver() {
        return this.driver;
    }
    shouldLog(msgLevel) {
        return this.logLevel <= msgLevel;
    }
    log(msgText, prefix, offset = 0) {
        this.driver.log(Logger.buildMessage(msgText, prefix, offset));
    }
    info(msgText, prefix, offset = 0) {
        if (!this.shouldLog(LogLevel_1.LEVEL_INFO)) {
            return;
        }
        const msg = Logger.buildMessage(msgText, prefix, offset);
        this.driver.info(msg);
    }
    debug(msgText, prefix, offset = 0) {
        if (!this.shouldLog(LogLevel_1.LEVEL_DEBUG)) {
            return;
        }
        this.driver.debug(Logger.buildMessage(msgText, prefix, offset));
    }
    error(msgText, prefix, offset = 0) {
        if (!this.shouldLog(LogLevel_1.LEVEL_ERROR)) {
            return;
        }
        this.driver.error(Logger.buildMessage(msgText, prefix, offset));
    }
    trace(msgText, prefix, offset = 0) {
        if (!this.shouldLog(LogLevel_1.LEVEL_TRACE)) {
            return;
        }
        this.driver.trace(Logger.buildMessage(msgText, prefix, offset));
    }
    static buildMessage(msgText, prefix, offset = 0) {
        if (msgText instanceof Message_1.default) {
            return msgText;
        }
        const msg = new Message_1.default();
        if (prefix) {
            const block = new MessageBlock_1.default(prefix);
            if (offset) {
                block.paddingLeft(offset);
            }
            msg.pushBlock(block);
        }
        msg.pushBlock(MessageBlock_1.default.instance(msgText));
        return msg;
    }
}
exports.default = Logger;
