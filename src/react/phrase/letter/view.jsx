const { h } = require('preact');

require('./styles');

module.exports = function PhraseLetterView({ letter }) {
  return (
    <div className={`m-phrase-letter${letter.isRevealed ? ' is-revealed' : ''}`}>
      {letter.isRevealed ? letter.label : `?`}
    </div>
  );
};
