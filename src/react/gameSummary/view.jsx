const { h } = require('preact');

require('./styles.scss');

const winMessage = 'You win! Congratulations!';
const loseMessage = 'Game over :( Better luck next time!';

function plural(label, amount) {
  return `${amount} ${label}${amount > 1 ? 's' : ''}`;
}

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
  const message = gameState.gameWon ? winMessage : loseMessage;

  return (
    <div className="m-summary">
      <div className="m-summary__content">
        <div className="m-summary__item">{message}</div>
        <div className="m-summary__item">The phrase was {phrase}.</div>
        <div className="m-summary__item">You played for {parseTimePlayed(timeSpent)}.</div>
        <button className="m-summary__restart" onclick={restartGame}>Play again</button>
      </div>
    </div>
  );
};
