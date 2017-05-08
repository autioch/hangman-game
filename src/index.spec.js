/* eslint-env mocha */
/* eslint max-nested-callbacks: [ 'error', 4 ] */
const { expect } = require('chai').use(require('chai-spies'));

const notImplemented = require('./notImplemented');

describe(`Calling notImplemented`, () => {
  it('should throw error', () => {
    expect(() => notImplemented()).to.throw(Error);
  });
});

describe(`Creating notImplemented`, () => {
  it('should throw error', () => {
    expect(() => new notImplemented()).to.throw(Error); // eslint-disable-line new-cap
  });
});

describe(`Using notImplemented as number`, () => {
  it('should throw error', () => {
    expect(() => notImplemented + 1).to.throw(Error);
  });
});

describe(`Using notImplemented as string`, () => {
  it('should throw error', () => {
    expect(() => `${notImplemented}a`).to.throw(Error);
  });
});
