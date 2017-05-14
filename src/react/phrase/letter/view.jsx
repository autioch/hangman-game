const { h } = require('preact');

require('./styles');

module.exports = function PhraseLetterView({ letter }) {
  const isRevealed = letter.isRevealed || (letter.label === ' ');

  return (
    <div className={`m-phrase-letter${isRevealed ? ' is-revealed' : ''}`}>
      {isRevealed ? letter.label : '?'}
    </div>
  );
};
