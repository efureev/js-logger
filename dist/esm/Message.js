import MessageBlock from './MessageBlock';

class Message {
  blocks = new Array();

  constructor(text, colors) {
    this.parse(text, colors);
  }

  getBlocks() {
    return this.blocks;
  }

  pushBlock(...args) {
    args.forEach(block => {
      if (block instanceof MessageBlock) {
        this.blocks.push(block);
      }
    });
    return this;
  }

  clear() {
    this.blocks = [];
  }

  count() {
    return this.blocks.length;
  }

  parse(text, colors) {
    if (text) {
      this.pushBlock(MessageBlock.instance(text, {
        colors
      }));
    }
  }

  static instance(block, colors) {
    return block instanceof Message ? block : new Message(block, colors);
  }

}

export default Message;
//# sourceMappingURL=Message.js.map