const { h } = require('preact');

module.exports = function LetterView({ letter }) {
  return (<div className="m-letter">{letter.label}</div>);
};
