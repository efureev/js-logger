import assert from 'assert'
import MessageBlock from '../src/MessageBlock'
import Message from '../src/Message'
import ColorCollection from '../src/ColorCollection'


describe('checking basics message', () => {
  const colors = new ColorCollection()

  it('create from string', () => {

    const msg = new Message('test')

    assert.equal(msg.count(), 1)

    const block = msg.getBlocks()[0]
    const blockNative = new MessageBlock('test')

    assert.equal(block.toJSON(), blockNative.toJSON())
  })

  it('push block', () => {

    const msg = new Message(undefined, colors)

    assert.equal(msg.count(), 0)

    const block1 = new MessageBlock('test', { colors })
    msg.pushBlock(block1)
    assert.equal(msg.count(), 1)

    const block2 = new MessageBlock('test2', { colors })
    block2.color('red')
    msg.pushBlock(block2)
    assert.equal(msg.count(), 2)

    assert.equal(block1.toJSON(), msg.getBlocks()[0].toJSON())
    assert.equal(block2.toJSON(), msg.getBlocks()[1].toJSON())

    msg.clear()
    assert.equal(msg.count(), 0)
  })

  it('push variadic blocks', () => {

    const msg = Message.instance()
      .pushBlock(
        MessageBlock.instance('prefix').color('red'),
        MessageBlock.instance('text')
      )

    assert.equal(msg.count(), 2)
  })
})
