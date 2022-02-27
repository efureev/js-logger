"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrowserLogger = void 0;
const LogLevel_1 = require("./LogLevel");
const Logger_1 = __importDefault(require("./Logger"));
const ConsoleDriver_1 = __importDefault(require("./drivers/ConsoleDriver"));
const BrowserLogger = (level = LogLevel_1.LEVEL_ERROR) => new Logger_1.default({ level: level, driver: new ConsoleDriver_1.default() });
exports.BrowserLogger = BrowserLogger;
exports.default = Logger_1.default;
