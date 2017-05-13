const { h } = require('preact');

const PartView = require('./part/view');

require('./styles');

module.exports = function LeveLSummaryView({ parts }) {
  return (
    <div className="m-gallows">
      {parts.map((isComplete) => <PartView isComplete={isComplete}/>)}
    </div>
  );
};
