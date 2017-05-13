const { h } = require('preact');
const PhraseLetterView = require('./letter/view');

require('./styles.scss');

module.exports = function PhraseView({ letters }) {
  return (
    <div className="m-phrase">
      {letters.map((letter) => <PhraseLetterView key={letter.index} letter={letter}/>)}
    </div>
  );
};
