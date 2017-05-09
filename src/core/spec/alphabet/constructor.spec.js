/* eslint-env mocha */
/* eslint max-nested-callbacks: [ 'error', 5 ] */
const { expect, spy } = require('chai').use(require('chai-spies'));

const Alphabet = require('../../alphabet');
const { invalid, foolish, valid } = require('./testCases');

console.warn = () => {};

describe('Creating Alphabet', () => {
  describe(`without parameter`, () => {
    it('should throw error', () => {
      expect(() => new Alphabet()).to.throw(Error);
    });
  });

  invalid.forEach((invalidParameter) => {
    describe(`with invalid parameter ${invalidParameter}`, () => {
      it('should throw error', () => {
        expect(() => new Alphabet(invalidParameter)).to.throw(Error);
      });
    });
  });

  foolish.forEach((foolishParameter) => {
    describe(`with weird parameter ${foolishParameter}`, () => {
      it('should warn in the console', () => {
        const consoleSpy = spy.on(console, 'warn');

        new Alphabet(foolishParameter);
        expect(consoleSpy).to.be.called();
      });
    });
  });

  valid.forEach((validParameter) => {
    describe(`with valid parameter ${validParameter}`, () => {
      it('should return an object', () => {
        expect(new Alphabet(validParameter)).to.be.an('object');
      });
    });
  });

  valid.forEach((validParameter) => {
    it('should have all letters available', () => {
      const alphabet = new Alphabet(validParameter);

      expect(alphabet.getAvailableLetters().length).to.be.equal(validParameter.length);
    });
  });
});
