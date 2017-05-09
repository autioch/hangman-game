/* eslint-env mocha */
/* eslint max-nested-callbacks: [ 'error', 5 ] */
const { expect } = require('chai').use(require('chai-spies'));

const Alphabet = require('../../alphabet');
const { valid, nonLetters } = require('./testCases');

describe('Alphabet picking', () => {
  const [letters] = valid;

  nonLetters.forEach((nonLetter) => {
    describe(`invalid letter`, () => {
      it('should throw', () => {
        expect(() => new Alphabet(letters).pickLetter(nonLetter)).to.throw(Error);
      });
    });
  });

  describe(`the same letter twice`, () => {
    it('should throw', () => {
      const alphabet = new Alphabet(letters);

      alphabet.pickLetter(letters[0]);

      expect(() => alphabet.pickLetter(letters[0])).to.throw(Error);
    });
  });

  describe(`an available letter`, () => {
    const alphabet = new Alphabet(letters);

    alphabet.pickLetter(letters[0]);

    it('should reduce number of available letters', () => {
      expect(alphabet.getAvailableLetters().length).to.equal(letters.length - 1);
    });
  });
});

describe('Alphabet reseting', () => {
  const [letters] = valid;
  const alphabet = new Alphabet(letters);

  alphabet.pickLetter(letters[0]);
  alphabet.reset();

  it('should reset number of available letters', () => {
    expect(alphabet.getAvailableLetters().length).to.equal(letters.length);
  });
});
