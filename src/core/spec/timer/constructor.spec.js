/* eslint-env mocha */
/* eslint max-nested-callbacks: [ 'error', 5 ] */
/* eslint no-undefined: ['off'] */
const { expect } = require('chai').use(require('chai-spies'));

const Timer = require('../../timer');

describe('Creating Timer', () => {
  describe(`without parameter`, () => {
    it('should not throw', () => {
      expect(() => new Timer()).not.to.throw(Error);
    });
  });
});
