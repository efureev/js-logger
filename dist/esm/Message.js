// export interface MessageBlockStyle extends {[index: string]:any}
import MessageBlock from "./MessageBlock";

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
      this.pushBlock(MessageBlock.instance(text));
    }
  }

  static instance(block) {
    return block instanceof Message ? block : new Message(block);
  }

}

export default Message;
//# sourceMappingURL=Message.js.map