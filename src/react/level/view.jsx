const { h } = require('preact');
const GallowsView = require('./gallows/view');
const PhraseView = require('./phrase/view');

require('./styles.scss');

module.exports = function LevelView({ letters, parts }) {
  return (
    <div className="m-level">
      <PhraseView letters={letters}/>
      <GallowsView parts={parts} />
    </div>
  );
};
