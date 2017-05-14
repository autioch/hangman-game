module.exports = function getInitialState() {
  return {
    alphabetLetters: [],
    attemptsCount: 0,
    chances: 0,
    currentLevel: 0,
    gallowParts: [],
    gameState: {},
    levelCount: 0,
    parts: [], // ?
    phrase: [], // ?
    phraseLetters: [],
    timeSpent: {},
    started: false,
    word: ''
  };
};
