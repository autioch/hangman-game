/* eslint no-undefined: ['off'] */

const nonLetters = [
  '',
  null,
  undefined,
  1,
  0,
  {},
  new Date(),
  Date
];

module.exports = {
  invalid: nonLetters.concat('a'),
  foolish: [
    [],
    ['a'],
    ['a', 'b']
  ],
  valid: [
    ['b', 'c', 'd'],
    ['a', 'b', 'c', 'd']
  ],
  nonLetters
};
