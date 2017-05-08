const { renderGameSummary, renderLevelSummary, renderStatus, renderLevel } = require('./view');
const { getInputFromKeyboard } = require('./utils');

/**
 * Loops the game until it's won or lost.
 * @param  {HangmanGame} game Instance of HangmanGame to loop.
 * @return {undefined}        Nothing.
 */
module.exports = function roundLoop(game) {
  const { gameFinished, levelWon } = game.getState();

  /* Game is finished - won or lost.
   * Render the level and game summary, then exit the loop. */
  if (gameFinished) {
    renderLevelSummary(game);
    renderGameSummary(game);

    return;
  }

  /* Level is finished.
   * Game is not finished, so we proceed with next level. */
  if (levelWon) {
    renderLevelSummary(game);
    game.nextLevel();
    renderLevel(game);
  }

  /* Level is in progress.
   * Render status, ask user for input and restart the loop. */
  renderStatus(game);
  getInputFromKeyboard(game.alphabet.getAvailableLetters(), (value) => {
    game.pickLetter(value);
    roundLoop(game);
  });
};
