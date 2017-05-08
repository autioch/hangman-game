const HangmanGame = require('../core/game');
const { words, letters, levelCount, attemptsCount } = require('../config');
const { renderGameSummary, renderLevelSummary, renderStatus, renderWelcome, renderLevel } = require('./view');
const { getInputFromKeyboard } = require('./utils');

const game = new HangmanGame(words, letters, levelCount, attemptsCount);

renderWelcome(game);
game.nextLevel();

function getUserInput() {
  getInputFromKeyboard(game.alphabet.getAvailableLetters(), (value) => {
    game.pickLetter(value);
    roundLoop(); // eslint-disable-line no-use-before-define
  });
}

function roundLoop() {
  const { gameFinished, levelWon } = game.getState();

  if (gameFinished) {
    renderLevelSummary(game);
    renderGameSummary(game);

    return;
  }

  if (levelWon) {
    renderLevelSummary(game);
    game.nextLevel();
    renderLevel(game);
  }

  renderStatus(game);
  getUserInput();
}

roundLoop();
