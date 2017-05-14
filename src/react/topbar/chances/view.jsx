const { h } = require('preact');
const { plural } = require('utils');

require('./styles');

module.exports = function ChancesView({ chances }) {
  return (
    <div className="m-summary__chances">
      {chances > 0 ? plural('chance', chances) : ''}
    </div>
  );
};
