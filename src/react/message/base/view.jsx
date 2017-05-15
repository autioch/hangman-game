const { h } = require('preact');

require('./styles');

module.exports = function MessageView({ header, paragraphs, actionLabel, action }) {
  return (
    <div className="c-message__wrapper">
      <div className="c-message">
        <div className="c-message__header">{header}</div>
        <div className="c-message__content">
          {paragraphs.map((paragraph) => <div className="c-message__paragraph">{paragraph}</div>)}
        </div>
        <div className="c-message__action">
          <button className="c-message__button" onclick={action}>{actionLabel}</button>
        </div>
      </div>
    </div>
  );
};
