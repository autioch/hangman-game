module.exports = function getGameState(game) {
  const gameState = game.getState();
  const chances = game.gallows.getMissingParts();

  return {
    alphabetLetters: game.alphabet.letters,
    chances,
    gameState,
    letters: game.phrase.letters,
    word: game.phrase.word,
    timeSpent: game.timer.getTimeSpent()
  };
};
