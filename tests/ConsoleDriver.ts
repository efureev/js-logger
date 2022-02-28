import Message from '../src/Message'

import assert from 'assert'
import ConsoleDriver from "../src/drivers/ConsoleDriver";

describe('checking basics message', () => {

  it('create from string', () => {

    const msg = new Message('test')
    const driver = new ConsoleDriver()

    driver.info(msg)

    assert.equal(msg.count(), 1);
  })
})
