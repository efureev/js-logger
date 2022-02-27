import MessageBlock from '../src/MessageBlock'

import assert from 'assert'

describe('checking basics', () => {

  it('create', () => {

    const block = new MessageBlock('test')
    assert.equal(block.getText(), 'test');
    assert.equal(JSON.stringify(block.getStyle()), JSON.stringify({}));

    block.color('red')

    assert.equal(JSON.stringify(block.getStyle()), JSON.stringify({color: "red"}));
    assert.equal(block.toJSON(), '{"_text":"test","style":{"color":"red"}}');
  })
})
