import MessageBlock from './MessageBlock'
import ColorCollection from './ColorCollection'
import { BlockPanel } from './Logger'

class Message {
  private blocks: Array<MessageBlock> = new Array<MessageBlock>()

  constructor(text?: BlockPanel, colors?: ColorCollection) {
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

  private parse(text?: BlockPanel, colors?: ColorCollection): void {
    if (text) {
      this.pushBlock(MessageBlock.instance(text, { colors }))
    }
  }

  static instance(block?: Message | BlockPanel, colors?: ColorCollection): Message {
    return block instanceof Message ? block : new Message(block, colors)
  }
}

export default Message
