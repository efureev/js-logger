# Browser Logger

[![CI: logger](https://github.com/efureev/js-logger/actions/workflows/nodejs.yml/badge.svg?branch=master)](https://github.com/efureev/js-logger/actions/workflows/nodejs.yml)
[![codecov](https://codecov.io/gh/efureev/js-logger/branch/main/graph/badge.svg?token=z2Xa7u7PYu)](https://codecov.io/gh/efureev/js-logger)
[![NPM version](https://img.shields.io/npm/v/@feugene/browser-logger?style=flat-square)](https://www.npmjs.com/package/@feugene/browser-logger)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg?style=flat-square)](https://conventionalcommits.org)

## Install

```shell
yarn add @feugene/browser-logger
```


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


```shell
const logger = new Logger(new ConsoleDriver())

logger.log(
  Message.instance().pushBlock(
    MessageBlock.instance('MessageBlock 1')
      .background('red')
      .color('white'),
    MessageBlock.instance('MessageBlock').color('red')
  )
)
```
