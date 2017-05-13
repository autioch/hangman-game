const { h } = require('preact');

require('./styles');

module.exports = function TopbarViewChanceView({ chances }) {
  return (<div className="m-summary__chances">{chances} chance{chances > 1 ? 's' : ''}</div>);
};
