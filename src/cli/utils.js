const chalk = require('chalk');
const promptly = require('promptly');

function plural(label, amount) {
  return `${amount} ${label}${amount > 1 ? 's' : ''}`;
}

function concealCharacter(character) {
  return character.isRevealed ? character.label : '_';
}

function getTextLine(textArray) {
  const maxLength = Math.max(...textArray.map((text) => text.length));

  return new Array(maxLength + 1).join('-');
}

module.exports = {

  plural,

  getInputFromKeyboard(choices, callback) {
    promptly.choose('Pick a letter:', choices, (err, value) => {
      let userInput = value;

      if (err) {
        userInput = '';
      }
      callback(userInput);
    });
  },

  parsePhrase(characters, conceal) {
    let parsedChars;

    if (conceal) {
      parsedChars = characters.map(concealCharacter);
    } else {
      parsedChars = characters.map((character) => character.label);
    }

    return parsedChars.join(' ');
  },

  parseLettersStatus(letters) {
    return letters.map(({ isPicked, label }) => chalk[isPicked ? 'gray' : 'green'](label.toUpperCase())).join(' ');
  },

  parseTimePlayed({ hours, minutes, seconds }) {
    let text = plural('second', seconds);

    if (hours > 0 || minutes > 0) {
      text = `${plural('minute', minutes)} and ${text}`;
    }

    if (hours > 0) {
      text = `${plural('hour', hours)}, ${text}`;
    }

    return text;
  },

  getTextLine,

  unshiftTextLine(textArray) {
    textArray.unshift(getTextLine(textArray));

    return textArray;
  }

};
