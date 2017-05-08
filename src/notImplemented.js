function throwError() {
  throw Error('Hangman-game is not yet implemented.');
}

function NotImplemented() {
  throwError();
}

NotImplemented.toString = throwError;
NotImplemented.valueOf = throwError;

NotImplemented.prototype = {
  constructor: NotImplemented,
  toString: throwError,
  valueOf: throwError
};

module.exports = NotImplemented;
