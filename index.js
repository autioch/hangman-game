function throwError() {
  throw Error('Hangman-game is not yet implemented.');
}

function NotImplemented() {
  throwError();
}

NotImplemented.toString = throwError;
NotImplemented.valueOf = throwError;

NotImplemented.prototype = {
  toString: throwError,
  valueOf: throwError,
  constructor: NotImplemented
};

module.exports = NotImplemented;
