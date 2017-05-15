/* eslint no-magic-numbers: 0 */
const { h } = require('preact');

require('./styles');

module.exports = function PersonView({ parts }) {
  return (
      <svg className="m-person" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 190" version="1.1" >
        <path className={`m-person__part ${parts[0] ? 'is-complete' : ''}`} d="m28,124 -20,55 -5,-1.5 20,-55z" />
        <path className={`m-person__part ${parts[1] ? 'is-complete' : ''}`} d="m23,124 20,55 5,-1.5 -20,-55z" />
        <path className={`m-person__part ${parts[2] ? 'is-complete' : ''}`} d="m23,39 5,0 0,90, -5,0z" />
        <path className={`m-person__part ${parts[3] ? 'is-complete' : ''}`} d="m23,41 15,50 5,-1.5 -15,-50z" />
        <path className={`m-person__part ${parts[4] ? 'is-complete' : ''}`} d="m28,41 -15,50 -5,-1.5 15,-50z" />
        <path className="m-person__rope" d="m23,0 0,40 4,4 1.5,-1.5 -3,-3 0,-40.5z"/>
        <circle className={`m-person__part ${parts[5] ? 'is-complete' : ''}`} cx="34" cy="35" r="10" />
      </svg>
  );
};
