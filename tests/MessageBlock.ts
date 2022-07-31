import MessageBlock from '../src/MessageBlock'

import assert from 'assert'
import ColorCollection from '../src/ColorCollection'
import colors from '../src/Color'

describe('checking basics', () => {

  it('create', () => {

    const block = new MessageBlock('test')
    assert.equal(block.getText(), 'test')
    assert.equal(JSON.stringify(block.getStyle()), JSON.stringify({}))

    block.color('#00ffaa')

    assert.equal(JSON.stringify(block.getStyle()), JSON.stringify({ color: '#00ffaa' }))
    assert.equal(block.toJSON(), '{"_text":"test","style":{"color":"#00ffaa"}}')
  })

  it('create2', () => {

    const block = new MessageBlock('test')
    assert.equal(block.getText(), 'test')
    assert.equal(JSON.stringify(block.getStyle()), JSON.stringify({}))

    block.color('red')

    assert.equal(JSON.stringify(block.getStyle()), JSON.stringify({ color: 'red' }))
    assert.equal(block.toJSON(), '{"_text":"test","style":{"color":"red"}}')
  })

  it('create3', () => {
    const colorCollection = new ColorCollection(colors)

    const block = new MessageBlock('test', { colors: colorCollection })
    assert.equal(block.getText(), 'test')
    assert.equal(JSON.stringify(block.getStyle()), JSON.stringify({}))

    block.color('red')

    assert.equal(JSON.stringify(block.getStyle()), JSON.stringify({ color: '#EC5f67' }))
    assert.equal(block.toJSON(), '{"_text":"test","style":{"color":"#EC5f67"}}')
  })
})
