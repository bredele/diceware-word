/**
 * Dependencies
 */

const random = require('dice-random')
const diceware = require('diceware-list')

/**
 * Create a word from a diceware dictionary.
 *
 * @param {Number} entroy (default 5)
 * @param {Object} dictionary (default EFF Long)
 * @return {String}
 * @api public
 */

module.exports = (entropy = 5, dictionary = diceware) => {
  let number = ''
  while (entropy--) number += random()
  return dictionary(number)
}
