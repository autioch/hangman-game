const { h } = require('preact');

require('./styles');

function noop() {} // eslint-disable-line no-empty-function

module.exports = function LetterView({ letter, action }) {
  return (
    <div
      className={`m-alphabet-letter${letter.isPicked ? ' is-picked' : ''}`}
      onclick={letter.isPicked ? noop : () => action(letter.label)}
    >
      {letter.label}
    </div>
  );
};
