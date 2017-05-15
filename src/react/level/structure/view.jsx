const { h } = require('preact');

require('./styles');

module.exports = function StructureView() {
  return (
    <svg className="m-structure" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110 220" version="1.1">
      <path className="m-structure__part" d="m100,161 -30,60 10,0 20,-40z" />
      <path className="m-structure__part" d="m76,0 25,25 0,10 -35,-35z" />
      <path className="m-structure__part" d="m99,0 0,220 10,0 0,-220z" />
    </svg>
  );
};
