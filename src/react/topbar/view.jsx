const { h } = require('preact');
const ChanceView = require('./chances/view');
const LevelView = require('./level/view');
const TimeSpentView = require('./time/view');

require('./styles.scss');

module.exports = function TopbarView({ currentLevel, chances, timeSpent }) {
  const chancesView = chances > 0 ? <ChanceView chances={chances} /> : '';

  return (
    <div className="m-topbar">
      {chancesView}
      <LevelView currentLevel={currentLevel} />
      <TimeSpentView timeSpent={timeSpent} />
    </div>
  );
};
