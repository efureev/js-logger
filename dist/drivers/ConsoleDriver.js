"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ConsoleDriver {
    debug(msg) {
        this.perform(msg, 'debug');
    }
    info(msg) {
        this.perform(msg, 'info');
    }
    log(msg) {
        this.perform(msg, 'log');
    }
    error(msg) {
        this.perform(msg, 'error');
    }
    trace(msg) {
        this.perform(msg, 'trace');
    }
    perform(msg, type) {
        const lines = ConsoleDriver.buildStrings(ConsoleDriver.formatMessage(msg));
        console[type](...lines);
    }
    static buildStrings(fmt) {
        return [fmt.fmtStr, ...fmt.fmtArgs];
    }
    static formatMessage(msg) {
        let fmtStr = '';
        const fmtArgs = [];
        msg.getBlocks().forEach((block) => {
            const { fmtStr: str, fmtArgs: args } = ConsoleDriver.formatBlock(block);
            fmtStr += str;
            fmtArgs.push(...args);
        });
        return { fmtStr, fmtArgs };
    }
    static formatBlock(block) {
        let fmtStr = '';
        const fmtArgs = [];
        if (block.hasStyle()) {
            fmtStr += '%c';
            const style = block.getStyle();
            let strStyle = '';
            for (const keyStyle in style) {
                strStyle += `${keyStyle}:${style[keyStyle]};`;
            }
            fmtArgs.push(strStyle);
        }
        fmtStr += '%s';
        fmtArgs.push(block.getText());
        return { fmtStr, fmtArgs };
    }
}
exports.default = ConsoleDriver;
