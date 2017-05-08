module.exports = class Dictionary {
  constructor(words) {
    this.words = words.map((word) => ({
      label: word,
      isDrawn: false
    }));
  }

  draw() {
    const available = this.words.filter((word) => !word.isDrawn);

    if (available.length === 0) {
      throw Error('There are no more passwords to draw!');
    }

    const drawnWord = available[Math.floor(Math.random() * available.length)];

    drawnWord.isDrawn = true;

    return drawnWord.label;
  }
};
