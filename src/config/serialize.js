/* eslint no-console: 0 */

const config = JSON.stringify(require('./config.js'), null, '  ');
const output = require('path').join(__dirname, '..', 'config.json');

require('fs').writeFile(output, config, 'utf-8', (err) => {
  if (err) {
    console.warn(err.message);
  } else {
    console.log('done');
  }
});
