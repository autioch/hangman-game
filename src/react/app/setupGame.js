const configPath = require('config');
const answersPath = require('answers');
const { fetchJson } = require('utils');
const HangmanGame = require('core/game');

module.exports = function setupGame() {
  return Promise
    .all([fetchJson(answersPath), fetchJson(configPath)])
    .then(([answers, config]) => {
      const { letters, levelCount, attemptsCount } = config;

      return new HangmanGame(answers, letters, levelCount, attemptsCount);
    });
};
