/* eslint no-console: 0 */
const chalk = require('chalk');
const { plural, parseTimePlayed, parsePhrase, parseLettersStatus } = require('./utils');

/* Console GUI. */
module.exports = {

  renderLevel(game) {
    console.log();
    console.log(chalk.cyan(`Level:   ${game.currentLevel}`));
  },

  renderWelcome(game) {
    console.log();
    console.log(chalk.cyan('Welcome to Hangman!'));
    console.log(chalk.cyan(`${plural('level', game.levelCount)} to win.`));
    console.log(chalk.cyan(`You can make a mistake ${plural('time', game.attemptsCount)} on each level.`));
    console.log(chalk.cyan(`All passwords are animals.`));
  },

  renderStatus(game) {
    console.log();
    console.log('Phrase:  ', chalk.gray(`${parsePhrase(game.phrase.letters, true)}`));
    console.log('Chances: ', chalk.gray(`${game.gallows.getMissingParts()}`));
    console.log('Letters: ', chalk.gray(`${parseLettersStatus(game.alphabet.letters)}`));
  },

  renderLevelSummary(game) {
    console.log();
    console.log(chalk.cyan('Level finished.'));
    console.log(chalk.cyan('The phrase was ', parsePhrase(game.phrase.letters, false)));
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
