const { h } = require('preact');

require('./styles');

module.exports = function LeveLSummaryView({ nextLevel, phrase }) {
  return (
    <div className="m-level-summary">
      <div className="m-level-summary__content">
        <div className="m-summary__item">Good job!</div>
        <div className="m-summary__item">The phrase was {phrase}.</div>
        <button className="m-summary__restart" onclick={nextLevel}>Next level</button>
      </div>
    </div>
  );
};
