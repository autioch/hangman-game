const { h } = require('preact');

require('./styles');

module.exports = function AlphabetLetterView({ letter, onChoose }) {
  return (
    <div className={`m-alphabet-letter${letter.isPicked ? ' is-picked' : ''}`} onclick={() => onChoose(letter.label)}>
      {letter.label}
    </div>
  );
};
