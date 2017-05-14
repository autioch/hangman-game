const { h } = require('preact');
const MessageView = require('../base/view');

module.exports = function LeveLSummaryView({ nextLevel, phrase }) {
  return <MessageView
    header="Good job!"
    paragraphs={[`The phrase was ${phrase}.`]}
    actionLabel="Next level"
    action={nextLevel}
  />;
};
