import assert from "assert";
import Logger from "../src";
// import ConsoleDriver from "../src/drivers/ConsoleDriver";
import Message from "../src/Message";
import MessageBlock from "../src/MessageBlock";
// @ts-ignore
import ConsoleBufferDriver from "../src/drivers/ConsoleBufferDriver";

describe('Logger', () => {

  const driver = new ConsoleBufferDriver()
  const logger = new Logger({driver})

  describe('From string', () => {
    it('Log without a prefix', () => {

      logger.log('test message')

      assert.deepEqual(driver.buffer, ['%s', 'test message'])

      assert.equal(driver.buffer.length, 2)
      assert.equal(driver.buffer[0], '%s')
      assert.equal(driver.buffer[1], 'test message')
      driver.clearBuffer()
      assert.equal(driver.buffer.length, 0)
    })

    it('Log with a prefix', () => {

      logger.log('test message', '[PREFIX]')

      assert.deepEqual(driver.buffer, ['%s%s', '[PREFIX]', 'test message'])
      driver.clearBuffer()
    })

    it('Log with a prefix and an offset', () => {

      logger.log('test message', '[PREFIX]', 3)

      assert.deepEqual(driver.buffer, ['%c%s%s', 'margin-left:30px;', '[PREFIX]', 'test message'])
      driver.clearBuffer()

    })
  })

  describe('From Message class', () => {
    it('Message from string', () => {
      logger.log(new Message('test message from Message'))

      assert.deepEqual(driver.buffer, ['%s', 'test message from Message'])
      driver.clearBuffer()
    })

    it('Message from MessageBlocks', () => {
      logger.log(new Message(MessageBlock.instance('test message from MessageBlocks')))

      assert.deepEqual(driver.buffer, ['%s', 'test message from MessageBlocks'])
      driver.clearBuffer()
    })

    it('Message from MessageBlock', () => {
      logger.log(
        new Message(
          MessageBlock
            .instance('test message from MessageBlock')
            .color('red')
            .paddingLeft(2)
        )
      )

      assert.deepEqual(driver.buffer, ['%c%s', 'color:red;margin-left:20px;', 'test message from MessageBlock'])
      driver.clearBuffer()
    })

    it('Message from fes MessageBlocks', () => {
      const msg = new Message(
        MessageBlock
          .instance('prefix')
          .background('red')
          .color('white')
          .paddingLeft(1)
      )
      msg.pushBlock(
        MessageBlock
          .instance('test message from MessageBlocks')
          .color('black')
      )

      logger.log(msg)

      assert.deepEqual(driver.buffer, [
        '%c%s%c%s',
        'background:red;color:white;margin-left:10px;',
        'prefix',
        'color:black;',
        'test message from MessageBlocks'
      ])
      driver.clearBuffer()
    })
  })
})
