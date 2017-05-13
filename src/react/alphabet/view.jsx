const { h } = require('preact');
const LetterView = require('./letter/view');

require('./styles.scss');

module.exports = function AlphabetView({ letters, onChoose }) {
  return (
    <div className="m-alphabet">
      {letters.map((letter) => <LetterView key={letter.index} letter={letter} onChoose={onChoose}/>)}
    </div>
  );
};
