module.exports = class Gallows {
  constructor(partCount = 0) {
    this.partCount = partCount;
    this.reset();
  }

  addPart() {
    if (this.isComplete()) {
      throw Error('Gallows is already complete.');
    }
    this.completedPartCount++; // eslint-disable-line no-plusplus
  }

  getMissingParts() {
    return this.partCount - this.completedPartCount;
  }

  isComplete() {
    return this.partCount === this.completedPartCount;
  }

  reset() {
    this.completedPartCount = 0;
  }
};
