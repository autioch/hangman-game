/* eslint no-magic-numbers: 0 */
/* eslint no-console: 0 */

const config = {
  attemptsCount: 6,
  levelCount: 5,
  category: 'animals',
  letters: 'abcdefghijklmnopqrstuvwxyz'.split(''),
  words: [
    'bear',
    'beaver',
    'chimpanzee',
    'crocodile',
    'dolphin',
    'duck',
    'elephant',
    'fish',
    'flea',
    'fleming',
    'giraffe',
    'hare',
    'hedgehog',
    'hippo',
    'horse',
    'hyena',
    'lion',
    'lizard',
    'monkey',
    'mouse',
    'neck',
    'orangutan',
    'panther',
    'parrot',
    'pelican',
    'penguin',
    'puma',
    'rabbit',
    'rhinoceros',
    'seal',
    'snail',
    'snake',
    'stork',
    'swallow',
    'swan',
    'tiger',
    'turtle',
    'unicorn',
    'whale',
    'zebra'
  ]
};

const output = require('path').join(__dirname, '..', 'src', 'config.json');

require('fs').writeFile(output, JSON.stringify(config, null, '  '), 'utf-8', (err) => {
  if (err) {
    console.warn(err.message);
  } else {
    console.log('done');
  }
});
