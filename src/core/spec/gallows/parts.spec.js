/* eslint-env mocha */
/* eslint max-nested-callbacks: [ 'error', 5 ] */
const { expect } = require('chai').use(require('chai-spies'));

const Gallows = require('../../gallows');

const exampleCount = 5;

describe('Changing Gallows', () => {
  describe(`adding part`, () => {
    it('should reduce chances by 1', () => {
      const gallows = new Gallows(exampleCount);
      const currentChances = gallows.getMissingParts();

      gallows.addPart();

      expect(gallows.getMissingParts()).to.equal(currentChances - 1);
    });
  });

  describe(`adding last part`, () => {
    it('should complete gallows', () => {
      const gallows = new Gallows(exampleCount);

      for (let index = 0; index < exampleCount; index++) {
        gallows.addPart();
      }

      expect(gallows.isComplete()).to.equal(true);
    });
  });

  describe(`adding too many parts`, () => {
    it('should throw error', () => {
      const gallows = new Gallows(exampleCount);

      for (let index = 0; index < exampleCount; index++) {
        gallows.addPart();
      }

      expect(gallows.addPart).to.throw(Error);
    });
  });

  describe(`reseting`, () => {
    it('should reset remaining chances', () => {
      const gallows = new Gallows(exampleCount);

      gallows.addPart();
      gallows.reset();

      expect(gallows.getMissingParts()).to.equal(exampleCount);
    });
  });
});
