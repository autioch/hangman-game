/* eslint-env mocha */
/* eslint max-nested-callbacks: [ 'error', 5 ] */
/* eslint no-undefined: ['off'] */
const { expect } = require('chai').use(require('chai-spies'));

const Game = require('../../game');

const { words, letters, levelCount, attemptsCount } = require('../../../config.json');

describe('Creating Game', () => {
  describe(`without parameters`, () => {
    it('should throw', () => {
      expect(() => new Game()).to.throw(Error);
    });
  });

  describe(`with valid parameters`, () => {
    it('should not throw', () => {
      expect(() => new Game(words, letters, levelCount, attemptsCount)).not.to.throw(Error);
    });
  });
});
