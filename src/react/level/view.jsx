const { h } = require('preact');
const PersonView = require('./person/view');
const StructureView = require('./structure/view');
const PhraseView = require('./phrase/view');

require('./styles.scss');

module.exports = function LevelView({ letters, chances, attemptsCount }) {
  return (
    <div className="m-level">
      <StructureView />
      <PersonView chances={chances} attemptsCount={attemptsCount} />
      <PhraseView letters={letters}/>
    </div>
  );
};
