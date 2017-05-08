module.exports = class Alphabet {
  constructor(letters) {
    this.letters = letters.map((letter) => ({
      label: letter,
      isPicked: false
    }));

    this.lettersByLabel = this.letters.reduce((dict, letter) => {
      dict[letter.label] = letter;

      return dict;
    }, {});
  }

  pickLetter(letter) {
    if (!this.lettersByLabel.hasOwnProperty(letter)) {
      throw Error(`There is no letter ${letter} in the alphabet.`);
    }

    if (this.lettersByLabel[letter].isPicked) {
      throw Error(`Letter ${letter} was already picked.`);
    }

    this.lettersByLabel[letter].isPicked = true;

    return true;
  }

  getAvailableLetters() {
    return this.letters.filter((letter) => !letter.isPicked).map((letter) => letter.label);
  }

  reset() {
    this.letters.forEach((letter) => {
      letter.isPicked = false;
    });
  }
};
