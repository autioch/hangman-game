const { h } = require('preact');
const LetterView = require('./letter/view');
const PlaceholderView = require('./placeholder/view');

require('./styles.scss');

module.exports = function PhraseView({ letters }) {
  let content;

  if (letters.length > 0) {
    content = letters.map((letter) => <LetterView key={letter.index} letter={letter}/>);
  } else {
    content = <PlaceholderView />;
  }

  return (
    <div className="m-phrase">
      {content}
    </div>
  );
};
