/* eslint-env mocha */
/* eslint max-nested-callbacks: [ 'error', 5 ] */
const { expect } = require('chai').use(require('chai-spies'));

const Alphabet = require('../../alphabet');
const { valid } = require('./testCases');

describe('Alphabet listing', () => {
  const [letters] = valid;

  describe(`letters`, () => {
    const alphabet = new Alphabet(letters);

    it('should return an array', () => {
      expect(alphabet.letters).to.be.an('array');
    });

    it('should return all letters for new instance', () => {
      expect(alphabet.letters.length).to.equal(letters.length);
    });
  });

  describe(`available letters`, () => {
    const alphabet = new Alphabet(letters);

    it('should return an array', () => {
      expect(alphabet.getAvailableLetters()).to.be.an('array');
    });

    it('should return all letters for new instance', () => {
      expect(alphabet.getAvailableLetters().length).to.equal(letters.length);
    });
  });
});
