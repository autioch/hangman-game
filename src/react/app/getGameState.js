module.exports = function getGameState(game) {
  const { gallows, alphabet, attemptsCount, currentLevel, levelCount, phrase, timer } = game;
  const gameState = game.getState();
  const chances = gallows.getMissingParts();

  return {
    alphabetLetters: alphabet.letters,
    attemptsCount,
    chances,
    currentLevel,
    gallowParts: new Array(attemptsCount).fill(0).map((el, index) => index >= chances),
    gameState,
    levelCount,
    phraseLetters: phrase.letters,
    timeSpent: timer.getTimeSpent(),
    word: phrase.word
  };
};
