/**
 * Dependencies
 */

const test = require('tape')
const word = require('..')
const list = Object.values(require('diceware-list/list.json'))

test('should generate random words from a diceware dictionarry', assert => {
  let plan = 100
  assert.plan(plan)
  while(plan--) {
    assert.equal(list.indexOf(word()) > -1, true)
  }
})
