const { h } = require('preact');

require('./styles');

function parseTimePlayed({ hours, minutes, seconds }) {
  if (!(seconds || minutes || hours)) {
    return '0s';
  }
  let text = `${seconds}s`;

  if (hours > 0 || minutes > 0) {
    text = `${minutes}m ${text}`;
  }

  if (hours > 0) {
    text = `${hours}h, ${text}`;
  }

  return text;
}

module.exports = function TopbarViewChanceView({ timeSpent }) {
  return (<div className="m-summary__time-spent">{parseTimePlayed(timeSpent)}</div>);
};
