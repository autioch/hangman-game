/* eslint-env mocha */
/* eslint max-nested-callbacks: [ 'error', 5 ] */
const { expect } = require('chai').use(require('chai-spies'));

const Gallows = require('../../gallows');

const exampleCount = 5;

describe('Creating Gallows', () => {
  describe(`without parameter`, () => {
    it('should create complete gallows', () => {
      expect(new Gallows().isComplete()).to.equal(true);
    });
  });
  describe(`without 5 parts`, () => {
    it('should create incomplete gallows', () => {
      expect(new Gallows(exampleCount).isComplete()).to.equal(false);
    });
  });
});
