import assert from 'assert'
import Logger, { BrowserLogger, LEVEL_INFO, LEVEL_INFO_STR, LEVEL_TRACE } from '../src'
import Message from '../src/Message'
import MessageBlock from '../src/MessageBlock'
import ConsoleBufferDriver from '../src/drivers/ConsoleBufferDriver'
import ColorCollection from '../src/ColorCollection'
import colors from '../src/Color'
import { INFO, LEVEL_DEBUG, LEVEL_ERROR, TRACE } from '../src/LogLevel'

describe('Logger', () => {

  const driver = new ConsoleBufferDriver()
  const colorCollection = new ColorCollection(colors)
  const logger = new Logger({ driver, colors: colorCollection })

  describe('From string', () => {
    it('Log without a prefix', () => {

      logger.log('test message')

      assert.deepEqual(driver.buffer, ['%ctest message', ''])

      assert.equal(driver.buffer.length, 2)
      assert.equal(driver.buffer[0], '%ctest message')
      assert.equal(driver.buffer[1], '')
      driver.clearBuffer()
      assert.equal(driver.buffer.length, 0)
    })

    it('Log with a prefix', () => {

      logger.log('test message', '[PREFIX]')

      assert.deepEqual(driver.buffer, ['%c[PREFIX]%ctest message', 'margin-right:10px;', ''])
      driver.clearBuffer()
    })

    it('Log with a prefix and an offset', () => {

      logger.log('test message', '[PREFIX]', 3)

      assert.deepEqual(driver.buffer, ['%c[PREFIX]%ctest message', 'margin-right:10px;margin-left:30px;', ''])
      driver.clearBuffer()

    })
  })

  describe('From Message class', () => {
    it('Message from string', () => {
      logger.log(new Message('test message from Message', logger.getColors()))

      assert.deepEqual(driver.buffer, ['%ctest message from Message', ''])
      driver.clearBuffer()
    })

    it('Message from MessageBlocks', () => {
      logger.log(new Message(
          MessageBlock.instance('test message from MessageBlocks', { colors: logger.getColors() }),
          logger.getColors()
        )
      )

      assert.deepEqual(driver.buffer, ['%ctest message from MessageBlocks', ''])
      driver.clearBuffer()
    })

    it('Message from MessageBlock', () => {
      logger.log(
        new Message(
          MessageBlock
            .instance('test message from MessageBlock', { colors: logger.getColors() })
            .color('red')
            .offsetLeft(2)
        )
      )
      const red = logger.getColors().get('red')
      assert.deepEqual(driver.buffer, ['%ctest message from MessageBlock', 'color:' + red + ';margin-left:20px;'])
      driver.clearBuffer()
    })

    it('Message from fes MessageBlocks', () => {
      const msg = new Message(
        MessageBlock
          .instance('prefix', { colors: logger.getColors() })
          .background('red')
          .color('white')
          .offsetLeft(1)
      )
      msg.pushBlock(
        MessageBlock
          .instance('test message from MessageBlocks', { colors: logger.getColors() })
          .color('black')
      )

      logger.log(msg)

      const red = logger.getColors().get('red')
      const black = logger.getColors().get('black')
      const white = logger.getColors().get('white')
      assert.deepEqual(driver.buffer, [
        '%cprefix%ctest message from MessageBlocks',
        'background:' + red + ';color:' + white + ';margin-left:10px;',
        'color:' + black + ';'
      ])
      driver.clearBuffer()
    })


    it('Badged', () => {
      const msg = Message.instance()
        .pushBlock(
          MessageBlock
            .instance('Warning')
            .background(logger.getColors().get('orange'))
            .color('white')
            .bold()
            .padding(1, 5)
            .borderRadius(4)
            .offsetLeft(1),

          MessageBlock
            .instance('test message from MessageBlocks', { colors: logger.getColors() })
            .color('purple')
            .italic()
            .offsetLeft(1),

          MessageBlock
            .instance('\tTotal:\t532!')
            .background('brown')
            .color('white')
            .marginTop(10)
            .marginBottom(3)
            .offsetLeft(3)
        )

      logger.log(msg)

      assert.deepEqual(driver.buffer, [
        '%cWarning%ctest message from MessageBlocks%c	Total:	532!',
        'background:#F99157;color:white;font-weight:bold;padding:1px 5px;border-radius:4px;margin-left:10px;', 'color:#C594C5;font-style:italic;margin-left:10px;',
        'background:brown;color:white;margin-top:10px;margin-bottom:3px;margin-left:30px;'
      ])

      driver.clearBuffer()
    })

  })

  describe('Panel', () => {
    it('Basic', () => {
      logger.panel('Warning')
      assert.deepEqual(driver.buffer, [
        '%cWarning', 'background:#FFFFFF;color:#1B2B34;border-radius:3px;padding:2px 4px;'
      ])
      driver.clearBuffer()
    })

    it('with options', () => {
      logger.panel('Warning', { bgColor: logger.getColors().get('teal'), offset: 1 })
      assert.deepEqual(driver.buffer, [
        '%cWarning', 'background:#5FB3B3;color:#1B2B34;margin-left:10px;border-radius:3px;padding:2px 4px;'
      ])
      driver.clearBuffer()
    })

    it('with options and post text', () => {
      logger.panel('Warning', {
        bgColor: logger.getColors().get('brown'),
        color: logger.getColors().get('teal'),
        offset: 1
      }, 'Post text')
      assert.deepEqual(driver.buffer, [
        '%cWarning%cPost text',
        'background:#AB7967;color:#5FB3B3;margin-left:10px;border-radius:3px;padding:2px 4px;',
        'margin-left:10px;'
      ])
      driver.clearBuffer()
    })
  })
})

describe('Logger levels', () => {

  const driver = new ConsoleBufferDriver()
  const colorCollection = new ColorCollection(colors)
  const logger = new Logger({ driver, colors: colorCollection })

  describe('level Errors', () => {
    it('Errors should log', () => {
      logger.setLevel(LEVEL_ERROR)
      driver.clearBuffer()
      logger.error('test message')
      assert.equal(driver.buffer.length, 2)
      assert.equal(driver.buffer[0], '%ctest message')
    })

    it('Info should not log', () => {
      logger.setLevel(LEVEL_ERROR)
      driver.clearBuffer()
      logger.info('test message')
      assert.equal(driver.buffer.length, 0)
    })

    it('debug should not log', () => {
      logger.setLevel(LEVEL_ERROR)
      driver.clearBuffer()
      logger.debug('test message')
      assert.equal(driver.buffer.length, 0)
    })

    it('trace should not log', () => {
      logger.setLevel(LEVEL_ERROR)
      driver.clearBuffer()
      logger.trace('test message')
      assert.equal(driver.buffer.length, 0)
    })
  })


  describe('level info && trace', () => {
    it('Errors should not log', () => {
      logger.setLevel(INFO | TRACE)
      driver.clearBuffer()
      logger.error('test message')
      assert.equal(driver.buffer.length, 0)
    })

    it('Info should not log', () => {
      logger.setLevel(INFO | TRACE)
      driver.clearBuffer()
      logger.info('test message')
      assert.equal(driver.buffer.length, 2)
      assert.equal(driver.buffer[0], '%ctest message')
    })

    it('debug should not log', () => {
      logger.setLevel(INFO | TRACE)
      driver.clearBuffer()
      logger.debug('test message')
      assert.equal(driver.buffer.length, 0)
    })

    it('trace should log', () => {
      logger.setLevel(INFO | TRACE)
      driver.clearBuffer()
      logger.trace('test message')
      assert.equal(driver.buffer.length, 2)
      assert.equal(driver.buffer[0], '%ctest message')
    })


    describe('level LEVEL_DEBUG', () => {
      it('Errors should log', () => {
        logger.setLevel(LEVEL_DEBUG)
        driver.clearBuffer()
        logger.error('test message')
        assert.equal(driver.buffer.length, 2)
        assert.equal(driver.buffer[0], '%ctest message')
      })

      it('Info should log', () => {
        logger.setLevel(LEVEL_DEBUG)
        driver.clearBuffer()
        logger.info('test message')
        assert.equal(driver.buffer.length, 2)
        assert.equal(driver.buffer[0], '%ctest message')
      })

      it('debug should not log', () => {
        logger.setLevel(LEVEL_DEBUG)
        driver.clearBuffer()
        logger.debug('test message')
        assert.equal(driver.buffer.length, 2)
        assert.equal(driver.buffer[0], '%ctest message')
      })

      it('trace should not log', () => {
        logger.setLevel(LEVEL_DEBUG)
        driver.clearBuffer()
        logger.trace('test message')
        assert.equal(driver.buffer.length, 0)
      })
    })
  })
})


describe('Logger with string log levels', () => {
  it('Log', () => {
    const logger = BrowserLogger()
    assert.equal(logger.logLevel, LEVEL_TRACE)
  })

  it('Log2', () => {
    const logger = BrowserLogger('trace')
    assert.equal(logger.logLevel, TRACE)
  })

  it('Log3', () => {
    const logger = BrowserLogger(LEVEL_INFO_STR)
    assert.equal(logger.logLevel, LEVEL_INFO)
  })
})
