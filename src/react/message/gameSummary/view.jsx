const { h } = require('preact');
const MessageView = require('../base/view');
const { plural } = require('utils');

function parseTimePlayed({ hours, minutes, seconds }) {
  return [
    hours > 0 ? `${plural('hour', hours)},` : '',
    hours > 0 || minutes > 0 ? `${plural('minute', minutes)} and` : '',
    plural('second', seconds)
  ].join(' ');
}

module.exports = function GameSummaryView({ gameWon, timeSpent, action, word }) {
  return <MessageView
    header={gameWon ? 'You win!' : 'Game over!'}
    paragraphs={[
      `The word was ${word}.`,
      `You have played for ${parseTimePlayed(timeSpent)}.`
    ]}
    actionLabel="Play again"
    action={action}
  />;
};
