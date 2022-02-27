"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MessageBlock_1 = __importDefault(require("./MessageBlock"));
class Message {
    blocks = new Array();
    constructor(text) {
        this.parse(text);
    }
    getBlocks() {
        return this.blocks;
    }
    pushBlock(block) {
        this.blocks.push(block);
    }
    clear() {
        this.blocks = [];
    }
    count() {
        return this.blocks.length;
    }
    parse(text) {
        if (text) {
            this.pushBlock(MessageBlock_1.default.instance(text));
        }
    }
    static instance(block) {
        return block instanceof Message ? block : new Message(block);
    }
}
exports.default = Message;
