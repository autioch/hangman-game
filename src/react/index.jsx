const { render, h } = require('preact');
const { captureError } = require('utils');

const AppView = require('./view.jsx');

window.onerror = captureError;

render(<AppView />, document.body);
