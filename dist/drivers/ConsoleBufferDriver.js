"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
class ConsoleBufferDriver extends index_1.ConsoleDriver {
    buffer = [];
    perform(msg, type) {
        this.buffer = ConsoleBufferDriver.buildStrings(ConsoleBufferDriver.formatMessage(msg));
    }
    clearBuffer() {
        this.buffer = [];
    }
}
exports.default = ConsoleBufferDriver;
