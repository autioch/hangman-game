const { h } = require('preact');

require('./styles');

module.exports = function LevelView({ currentLevel }) {
  return (<div className="m-summary__level">Level {currentLevel}</div>);
};
