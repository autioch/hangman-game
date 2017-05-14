const { h } = require('preact');

const isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

require('./styles');

const svgWidth = 142;
const svgHeight = 222;

module.exports = function LeveLSummaryView({ parts }) {
  const firefoxFix = isFirefox ? {
    width: svgHeight,
    height: svgHeight
  } : {};

  return (
    <div className="m-gallows">
      <svg
        className={`m-gallows__svg ${isFirefox ? 'is-firefox' : ''}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        version="1.1"
        {...firefoxFix}
      >
        <g fill="#ddd">
          <path class={`hangman-part ${parts[0] ? 'is-complete' : ''}`} d="m28,135 -20,55 -5,-1.5 20,-55z" />
          <path class={`hangman-part ${parts[1] ? 'is-complete' : ''}`} d="m23,135 20,55 5,-1.5 -20,-55z" />
          <path class={`hangman-part ${parts[2] ? 'is-complete' : ''}`} d="m23,50 5,0 0,90, -5,0z" />
          <path class={`hangman-part ${parts[3] ? 'is-complete' : ''}`} d="m23,52 15,50 5,-1.5 -15,-50z" />
          <path class={`hangman-part ${parts[4] ? 'is-complete' : ''}`} d="m28,52 -15,50 -5,-1.5 15,-50z" />
        </g>
        <path fill="#999" stroke="#999" stroke-width="0.5" d="m25,11 0,40 -3,3 1.5,1.5 4,-4 0,-40.5z"/>
        <circle class={`hangman-part ${parts[5] ? 'is-complete' : ''}`} fill="#ddd" cx="16" cy="47" r="10" />
        <g fill="#964b25" stroke="#442211">
          <path d="m101,11 0,210 10,0 0,-210z" />
          <path d="m101,161 -30,60 10,0 20,-40z" />
          <path d="m111,161 30,60 -10,0 -20,-40z" />
          <path d="m76,11 25,25 0,10 -35,-35z" />
          <path d="m1,1 110,0 0,10 -110,0z" />
        </g>
      </svg>

    </div>
  );
};
