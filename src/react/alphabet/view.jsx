const { h } = require('preact');
const LetterView = require('./letter/view');

module.exports = function alphabetView({ letters }) {
  return (
    <div className="m-alphabet">
      {letters.map((letter) => <LetterView key={letter.label} letter={letter}/>)}
    </div>
  );
};
