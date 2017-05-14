const { h } = require('preact');
const MessageView = require('../base/view');

module.exports = function LeveLSummaryView({ action, phrase }) {
  return <MessageView
    header="Good job!"
    paragraphs={[`The word is ${phrase}.`]}
    actionLabel="Next level"
    action={action}
  />;
};
