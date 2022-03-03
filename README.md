# Browser Logger

[![CI: logger](https://github.com/efureev/js-logger/actions/workflows/nodejs.yml/badge.svg?branch=master)](https://github.com/efureev/js-logger/actions/workflows/nodejs.yml)
[![codecov](https://codecov.io/gh/efureev/js-logger/branch/main/graph/badge.svg?token=z2Xa7u7PYu)](https://codecov.io/gh/efureev/js-logger)
[![NPM version](https://img.shields.io/npm/v/@feugene/browser-logger?style=flat-square)](https://www.npmjs.com/package/@feugene/browser-logger)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg?style=flat-square)](https://conventionalcommits.org)

## Install

```shell
yarn add @feugene/browser-logger
```

## Example in Browsers

Chrome
![Chrome](./.media/chrome.png)

Safari
![Chrome](./.media/safari.png)

## Use

```shell
const logger = new Logger(new ConsoleDriver())

// ...

logger.log('test')
logger.info('test', 'prefix', 3)
logger.error(new Message('test'))

// ...

const msg = new Message()
msg.pushBlock(MessageBlock.instance('prefix').color('white').background('red').paddingLeft(2))
msg.pushBlock(MessageBlock.instance('Basic text').color('red'))
logger.log(msg)
```

U
### Advanced use

You can use your logger-wrapper with your custom panels:

```js
import { BrowserLogger, colors } from '@feugene/browser-logger'

export default class Logger {
  constructor(level) {
    this.logger = BrowserLogger(level)

    return new Proxy(this, {
      get(target, prop) {
        if (prop in target) {
          return target[prop]
        }
        return target.logger[prop]
      },
    })
  }

  warning(text, title = '⚠️ warning', offset = 0) {
    return this.logger.panel(
      title,
      { bgColor: colors.orange, color: colors.white, offset },
      text
    )
  }

  info(text, title = 'info', offset = 0) {
    return this.logger.panel(title, { bgColor: colors.teal, offset }, text)
  }

  error(text, title = '🆘 error', offset = 0) {
    return this.logger.panel(
      title,
      { bgColor: colors.red, color: colors.white, offset },
      text
    )
  }
}
```

And use it:

```js
import { Message, MessageBlock, colors } from '@feugene/browser-logger'
{
// ...
    this.logger = new Logger()

    this.logger.warning('MessageBlock', undefined, 4)
    this.logger.warning('MessageBlock', 'ALERT')
    this.logger.error('MessageBlock')
    this.logger.error('MessageBlock')
    this.logger.info('Info', 'text')

    this.logger.panel('Title', undefined, 'Post Text')
    this.logger.panel('Title', {}, 'Post Text')
    this.logger.panel('Title', {
      bgColor: '#5FB3B3',
      color: '#1B2B34',
      offset: 5,
    })

    const msg = Message.instance().pushBlock(
      MessageBlock.instance('panel 1')
        .background('green')
        .borderRadius(3)
        .offsetLeft(1)
        .padding(2, 4),

      MessageBlock.instance('panel 2')
        .background('blue')
        .offsetLeft(1)
        .padding(2, 4),

      MessageBlock.instance('panel 3')
        .background('black')
        .color('white')
        .borderRadius(10)
        .offsetLeft(5)
        .padding(2, 4),

      MessageBlock.instance('4 330')
        .background(colors.purple)
        .color('white')
        .borderRadius(10)
        .offsetLeft(5)
        .padding(2, 20)
    )

    this.logger.log(msg)

    this.logger.panel('Title', {
      bgColor: '#5FB3B3',
      color: '#1B2B34',
      offset: 5,
    })
}
```
