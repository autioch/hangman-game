module.exports = function getGameState(game) {
  const gameState = game.getState();
  const chances = game.gallows.getMissingParts();

  return {
    alphabetLetters: game.alphabet.letters,
    attemptsCount: game.attemptsCount,
    chances,
    currentLevel: game.currentLevel,
    gallowParts: new Array(game.attemptsCount).fill(0).map((el, index) => index >= chances),
    gameState,
    levelCount: game.levelCount,
    phraseLetters: game.phrase.letters,
    timeSpent: game.timer.getTimeSpent(),
    word: game.phrase.word
  };
};
