/* eslint max-params: 0 */
/* eslint no-undefined: 0 */
/* eslint prefer-destructuring: 0 */
/* eslint no-alert: 0 */
module.exports = function captureError(message, url, lineNo, columnNo, error) {
  let stack = 'Missing';

  if (error && error !== null && error !== undefined && error.stack) {
    stack = error.stack;
  }

  alert(`
    Sorry, an error occured.
    ${message}
    ${url}
    ${lineNo}
    ${columnNo}
    ${stack}
    `);
};
