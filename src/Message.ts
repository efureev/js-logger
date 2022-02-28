import MessageBlock from './MessageBlock'

class Message {
  private blocks: Array<MessageBlock> = new Array<MessageBlock>()

  constructor(text?: MessageBlock | string) {
    this.parse(text)
  }

  getBlocks(): Array<MessageBlock> {
    return this.blocks
  }

  pushBlock(...args: MessageBlock[]): this {
    args.forEach((block) => {
      this.blocks.push(block)
    })

    return this
  }

  clear() {
    this.blocks = []
  }

  count(): number {
    return this.blocks.length
  }

  private parse(text?: string | MessageBlock): void {
    if (text) {
      this.pushBlock(MessageBlock.instance(text))
    }
  }

  static instance(block?: Message | MessageBlock | string): Message {
    return block instanceof Message ? block : new Message(block)
  }
}

export default Message
