const { h } = require('preact');
const MessageView = require('../base/view');

module.exports = function LeveLSummaryView({ nextLevel, phrase }) {
  return <MessageView
    header="Good job!"
    paragraphs={[`The word is ${phrase}.`]}
    actionLabel="Next level"
    action={nextLevel}
  />;
};
