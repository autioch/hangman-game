/* eslint-env mocha */
/* eslint max-nested-callbacks: [ 'error', 5 ] */
const { expect } = require('chai').use(require('chai-spies'));

const Dictionary = require('../../dictionary');
const { valid } = require('./testCases');

describe('Dictionary drawing', () => {
  const [words] = valid;

  describe(`a random word`, () => {
    it('should return a string', () => {
      expect(new Dictionary(words).draw()).to.be.a('string');
    });
  });

  describe(`too many words`, () => {
    it('should throw', () => {
      const dictionary = new Dictionary(words.slice(0, 1));

      dictionary.draw();

      expect(dictionary.draw).to.throw(Error);
    });
  });
});
