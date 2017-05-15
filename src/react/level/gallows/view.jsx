const { h } = require('preact');
const PersonView = require('./person/view');
const StructureView = require('./structure/view');

require('./styles');

module.exports = function GallowsView({ parts }) {
  return (
    <div className="m-gallows">
      <StructureView />
      <PersonView parts={parts} />
    </div>
  );
};
