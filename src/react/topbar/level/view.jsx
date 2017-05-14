const { h } = require('preact');

require('./styles');

module.exports = function LevelView({ currentLevel }) {
  return (
    <div className="m-summary__level">
      {currentLevel > 0 ? `Level ${currentLevel}` : ''}
    </div>
  );
};
