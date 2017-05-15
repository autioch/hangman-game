/* eslint no-console: 0 */
const chalk = require('chalk');
const { plural, parseTimePlayed, parsePhrase, parseLettersStatus, unshiftTextLine } = require('./utils');

/* Console GUI. */
module.exports = {

  renderLevel(game) {
    console.log();
    console.log(chalk.cyan(`Level:   ${game.currentLevel}`));
  },

  renderWelcome(game) {
    const welcomeLines = [
      'Welcome to Hangman!',
      `You have ${plural('level', game.levelCount)} to go.`,
      `In each level, You have ${plural('attemp', game.attemptsCount)} to guess a letter.`,
      `All words are from animals category.`
    ];

    console.log();
    unshiftTextLine(welcomeLines).forEach((welcomeLine) => console.log(chalk.cyan(welcomeLine)));
  },

  renderStatus(game) {
    console.log();
    console.log('Word:    ', chalk.gray(`${parsePhrase(game.phrase.letters, true)}`));
    console.log('Chances: ', chalk.gray(`${game.gallows.getMissingParts()}`));
    console.log('Letters: ', chalk.gray(`${parseLettersStatus(game.alphabet.letters)}`));
  },

  renderLevelSummary(game) {
    console.log();
    console.log(chalk.cyan('Level finished.'));
    console.log(chalk.cyan('The word was ', parsePhrase(game.phrase.letters, false)));
    if (game.gallows.getMissingParts() === game.gallows.partCount) {
      console.log(chalk.cyan('A perfect level! Nice!'));
    }
  },

  renderGameSummary(game) {
    console.log();
    if (game.getState().gameWon) {
      console.log(chalk.cyan('You win! Congratulations!'));
    } else {
      console.log(chalk.cyan('Game over :( Better luck next time!'));
    }
    console.log(chalk.cyan(`You played for ${parseTimePlayed(game.timer.getTimeSpent())}.`));
  }
};
