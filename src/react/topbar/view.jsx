const { h } = require('preact');
const ChanceView = require('./chances/view');
const LevelView = require('./level/view');
const TimeSpentView = require('./time/view');

require('./styles.scss');

module.exports = function TopbarView({ currentLevel, chances, gameTimer }) {
  return (
    <div className="m-topbar">
      <ChanceView chances={chances} />
      <LevelView currentLevel={currentLevel} />
      <TimeSpentView gameTimer={gameTimer} />
    </div>
  );
};
