/* eslint-env mocha */
/* eslint max-nested-callbacks: [ 'error', 5 ] */
/* eslint no-undefined: ['off'] */
const { expect } = require('chai').use(require('chai-spies'));

const Phrase = require('../../phrase');

const { invalidWords } = require('./testCases');

describe('Creating Phrase', () => {
  describe(`without parameter`, () => {
    it('should throw', () => {
      expect(() => new Phrase()).to.throw(Error);
    });
  });

  invalidWords.forEach((invalidWord) => {
    describe(`with invalid parameter ${invalidWord}`, () => {
      it('should throw', () => {
        expect(() => new Phrase()).to.throw(Error);
      });
    });
  });
});
