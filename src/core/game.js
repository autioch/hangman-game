const Alphabet = require('./alphabet');
const Dictionary = require('./dictionary');
const Timer = require('./timer');
const Gallows = require('./gallows');
const Phrase = require('./phrase');

module.exports = class HangmanGame {
  constructor(words, letters, levelCount, attemptsCount) {
    if (words.length < levelCount) {
      throw Error(`Vocabulary passed to gameFactory is smaller than levelCount (${levelCount}).`);
    }

    this.levelCount = levelCount;
    this.attemptsCount = attemptsCount;
    this.alphabet = new Alphabet(letters);
    this.dictionary = new Dictionary(words);
    this.gallows = new Gallows(attemptsCount);
    this.timer = new Timer();
    this.phrase = new Phrase('');
    this.currentLevel = 0;
  }

  getState() {
    const levelLost = this.gallows.isComplete();
    const levelWon = this.phrase.isRevealed();
    const nextLevelAvailable = this.currentLevel < this.levelCount;
    const gameWon = levelWon && !nextLevelAvailable;

    return {
      gameWon,
      gameLost: levelLost,
      gameFinished: gameWon || levelLost,
      levelWon,
      levelLost,
      levelFinished: levelLost || levelWon,
      nextLevelAvailable,
      currentLevel: this.currentLevel,
      levelCount: this.levelCount,
      attemptsCount: this.attemptsCount
    };
  }

  nextLevel() {
    this.currentLevel++; // eslint-disable-line no-plusplus
    this.alphabet.reset();
    this.gallows.reset();
    this.timer.start();
    this.phrase.setWord(this.dictionary.draw());
  }

  pickLetter(letter) {
    this.alphabet.pickLetter(letter);

    const containsLetter = this.phrase.containsLetter(letter);

    if (containsLetter) {
      this.phrase.revealLetter(letter);
    } else {
      this.gallows.addPart();
    }

    const { gameFinished, levelFinished } = this.getState();

    if (gameFinished || levelFinished) {
      this.timer.stop();
    }

    return containsLetter;
  }

  reset() {
    this.alphabet.reset();
    this.dictionary.reset();
    this.gallows.reset();
    this.timer.reset();
    this.phrase.setWord('');
    this.currentLevel = 0;
  }
};
