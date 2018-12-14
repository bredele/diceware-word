# diceware-word

[![Build Status](https://travis-ci.org/bredele/diceware-word.svg?branch=master)](https://travis-ci.org/bredele/diceware-word)
 [![NPM](https://img.shields.io/npm/v/diceware-word.svg)](https://www.npmjs.com/package/diceware-word)
 [![Downloads](https://img.shields.io/npm/dm/diceware-word.svg)](http://npm-stat.com/charts.html?package=diceware-word)
 [![pledge](https://bredele.github.io/contributing-guide/community-pledge.svg)](https://github.com/bredele/contributing-guide/blob/master/guidelines.md)

Create [diceware word](https://github.com/bredele/diceware-list) using [dices](https://github.com/bredele/dice-random) as random number generators. A word requires five rolls of the dice and each word generated adds 12.9 bits ![entropy](http://latex.codecogs.com/gif.latex?%5Clog_%7Be%7D%286%5E5%29) of entropy to your passphrase.


## Usage

```js
const word = require('diceware-word')

// generate random diceware word
word()
// => zoom
```

You can change the entropy by changing the number of rolls (first argument) as well as the diceware word list (second argument).


## Installation

```shell
npm install diceware-word --save
```

[![NPM](https://nodei.co/npm/diceware-word.png)](https://nodei.co/npm/diceware-word/)


## Question

For questions and feedback please use our [twitter account](https://twitter.com/bredeleca). For support, bug reports and or feature requests please make sure to read our
<a href="https://github.com/bredele/contributing-guide/blob/master/guidelines.md" target="_blank">community guideline</a> and use the issue list of this repo and make sure it's not present yet in our reporting checklist.

## Contribution

diceware-word is an open source project and would not exist without its community. If you want to participate please make sure to read our <a href="https://github.com/bredele/contributing-guide/blob/master/guidelines.md" target="_blank">guideline</a> before making a pull request. If you have any diceware-word related project, component or other let everyone know in our wiki.

## License

The MIT License (MIT)

Copyright (c) 2016 Olivier Wietrich

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
