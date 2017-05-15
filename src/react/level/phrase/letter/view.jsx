const { h } = require('preact');

require('./styles');

module.exports = function LetterView({ letter: { label, isRevealed } }) {
  const reveal = isRevealed || (label === ' ');

  return (
    <div className={`m-phrase-letter${reveal ? ' is-revealed' : ''}`}>
      {reveal ? label : '?'}
    </div>
  );
};
