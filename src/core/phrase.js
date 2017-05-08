module.exports = class Phrase {
  constructor(word) {
    this.setWord(word);
  }

  setWord(word) {
    this.word = word;
    this.letters = word.split('').map((letter) => ({
      label: letter,
      isRevealed: false
    }));
  }

  containsLetter(letterToCheck) {
    return this.letters.some((letter) => letter.label === letterToCheck);
  }

  revealLetter(letterToReveal) {
    this.letters
      .filter((letter) => letter.label === letterToReveal)
      .forEach((letter) => {
        letter.isRevealed = true;
      });
  }

  isRevealed() {
    return this.letters.every((letter) => letter.isRevealed);
  }
};
