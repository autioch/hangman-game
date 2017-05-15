const { h } = require('preact');
const LetterView = require('./letter/view');
const PlaceholderView = require('./placeholder/view');

require('./styles.scss');

module.exports = function PhraseView({ letters }) {
  const placeholder = letters.length === 0 ? <PlaceholderView /> : '';

  return (
    <div className="m-phrase">
      {letters.map((letter) => <LetterView key={letter.index} letter={letter}/>)}
      {placeholder}
    </div>
  );
};
