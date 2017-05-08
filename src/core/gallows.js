module.exports = class Gallows {
  constructor(partCount) {
    this.partCount = partCount;
    this.reset();
  }

  addPart() {
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
