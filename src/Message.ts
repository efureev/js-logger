import MessageBlock from './MessageBlock'
import ColorCollection from './ColorCollection'

class Message {
  private blocks: Array<MessageBlock> = new Array<MessageBlock>()

  constructor(text?: MessageBlock | string, colors?: ColorCollection) {
    this.parse(text, colors)
  }

  getBlocks(): Array<MessageBlock> {
    return this.blocks
  }

  pushBlock(...args: (MessageBlock | null)[]): this {
    args.forEach(block => {
      if (block instanceof MessageBlock) {
        this.blocks.push(block)
      }
    })

    return this
  }

  clear() {
    this.blocks = []
  }

  count(): number {
    return this.blocks.length
  }

  private parse(text?: string | MessageBlock, colors?: ColorCollection): void {
    if (text) {
      this.pushBlock(MessageBlock.instance(text, { colors }))
    }
  }

  static instance(block?: Message | MessageBlock | string, colors?: ColorCollection): Message {
    return block instanceof Message ? block : new Message(block, colors)
  }
}

export default Message
