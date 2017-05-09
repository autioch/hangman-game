/* eslint no-undefined: ['off'] */

module.exports = {
  invalid: [
    '',
    null,
    undefined,
    1,
    0,
    {},
    new Date(),
    Date
  ],
  valid: [
    ['b', 'c', 'd'],
    ['a', 'b', 'c', 'd']
  ]
};
