const { h } = require('preact');
const MessageView = require('../base/view');
const { plural } = require('utils');

const winMessage = 'You win the game!';
const loseMessage = 'Game over!';

function parseTimePlayed({ hours, minutes, seconds }) {
  let text = plural('second', seconds);

  if (hours > 0 || minutes > 0) {
    text = `${plural('minute', minutes)} and ${text}`;
  }

  if (hours > 0) {
    text = `${plural('hour', hours)}, ${text}`;
  }

  return text;
}

module.exports = function GameSummaryView({ gameState, timeSpent, restartGame, phrase }) {
  return <MessageView
    header={gameState.gameWon ? winMessage : loseMessage}
    paragraphs={[
      `The phrase was ${phrase}.`,
      `You played for ${parseTimePlayed(timeSpent)}.`
    ]}
    actionLabel="Play again"
    action={restartGame}
  />;
};
