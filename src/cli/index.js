const HangmanGame = require('../core/game');
const { letters, levelCount, attemptsCount, category } = require('../config');
const words = require('../answers');
const { renderWelcome } = require('./view');
const roundLoop = require('./roundLoop');

/* Create new instance of the game. */
const gameInstance = new HangmanGame(words, letters, levelCount, attemptsCount);

/* Render welcome screen with game settings. */
renderWelcome(gameInstance, category);

/* Setup first level.
 * Starts the game timer. */
gameInstance.nextLevel();

/* Start the loop.
 * It will continualy ask the player for input until game ends. */
roundLoop(gameInstance);
