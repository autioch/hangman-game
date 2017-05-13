const { h } = require('preact');

require('./styles');

module.exports = function PartView({ isComplete }) {
  return (
    <div className={`m-gallows__part ${isComplete ? 'is-complete' : ''}`}></div>
  );
};
