const { render, h } = require('preact');
const { captureError } = require('utils');
const AppView = require('./app/view');

require('./styles');

// window.onerror = captureError;

render(<AppView />, document.body);
