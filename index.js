/**
 * Dependencies
 */

const random = require('dice-random')
const list = require('diceware-list')


module.exports = (entropy = 5) => {
  let number = ''
  while (entropy--) number += random()
  return list(number)
}
