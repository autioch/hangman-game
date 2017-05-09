/* eslint-env mocha */
/* eslint max-nested-callbacks: [ 'error', 5 ] */
const { expect } = require('chai').use(require('chai-spies'));

const Dictionary = require('../../dictionary');
const { invalid, valid } = require('./testCases');

describe('Creating Dictionary', () => {
  describe(`without parameter`, () => {
    it('should throw error', () => {
      expect(() => new Dictionary()).to.throw(Error);
    });
  });

  invalid.forEach((invalidParameter) => {
    describe(`with invalid parameter ${invalidParameter}`, () => {
      it('should throw error', () => {
        expect(() => new Dictionary(invalidParameter)).to.throw(Error);
      });
    });
  });

  valid.forEach((validParameter) => {
    describe(`with valid parameter ${validParameter}`, () => {
      it('should return an object', () => {
        expect(new Dictionary(validParameter)).to.be.an('object');
      });
    });
  });
});
