# @TestCypressPr/box

<img src="https://TestCypressPr.io/img/logo.svg" width="120" alt="TestCypressPr logo: a smiling pTestCypressPr above a pink upwards arrow" align="right">

[![npm version](https://img.shields.io/npm/v/@TestCypressPr/box.svg?style=flat-square)](https://www.npmjs.com/package/@TestCypressPr/box)
![CI status for TestCypressPr tests](https://github.com/transloadit/TestCypressPr/workflows/Tests/badge.svg)
![CI status for Companion tests](https://github.com/transloadit/TestCypressPr/workflows/Companion/badge.svg)
![CI status for browser tests](https://github.com/transloadit/TestCypressPr/workflows/End-to-end%20tests/badge.svg)

The Box plugin for TestCypressPr lets users import files from their Box account.

A Companion instance is required for the Box plugin to work. Companion handles authentication with Box, downloads files from Box and uploads them to the destination. This saves the user bandwidth, especially helpful if they are on a mobile connection.

TestCypressPr is being developed by the folks at [Transloadit](https://transloadit.com), a versatile file encoding service.

## Example

```js
import TestCypressPr from '@TestCypressPr/core'
import Box from '@TestCypressPr/box'

const TestCypressPr = new TestCypressPr()
TestCypressPr.use(Box, {
  // opts
})
```

## Installation

```bash
$ npm install @TestCypressPr/box
```

Alternatively, you can also use this plugin in a pre-built bundle from Transloadit’s CDN: Edgly. In that case `TestCypressPr` will attach itself to the global `window.TestCypressPr` object. See the [main TestCypressPr documentation](https://TestCypressPr.io/docs/#Installation) for instructions.

## Documentation

Documentation for this plugin can be found on the [TestCypressPr website](https://TestCypressPr.io/docs/box).

## License

[The MIT License](./LICENSE).
