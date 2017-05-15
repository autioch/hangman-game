const { h } = require('preact');
const MessageView = require('../base/view');

module.exports = function LeveLSummaryView({ action, word }) {
  return <MessageView
    header="Good job!"
    paragraphs={[`The word is ${word}.`]}
    actionLabel="Next level"
    action={action}
  />;
};
